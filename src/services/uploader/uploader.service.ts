import { Injectable, Logger, LoggerService } from '@nestjs/common';
import path from 'path';
import { Readable } from 'stream';
import { v4 as uuidV4 } from 'uuid';
import { FileUploadDto } from './dtos/file-upload.dto';
import { RatioEnum } from './enums/ratio.enum';
import { FileType } from 'src/model/enums';
import fs from 'fs';
import {
  detectMimeTypeFromFilename,
  mapFileTypeEnumFromMIME,
} from 'src/utils/mime-types.function';
import { MAX_FILE_SIZES } from './constants';

@Injectable()
export class UploaderService {
  private readonly loggerService: LoggerService;

  constructor() {
    this.loggerService = new Logger(UploaderService.name);
  }

  public async getFileMetadataFromLocal(
    filePath: string,
  ): Promise<{ size: number; mimeType: FileType }> {
    try {
      // Implement logic to retrieve file metadata from the local file system
      const stats = await fs.promises.stat(filePath);

      const metadata = {
        size: stats.size,
        mimeType: mapFileTypeEnumFromMIME(detectMimeTypeFromFilename(filePath)),
      };

      return metadata;
    } catch (error) {
      this.loggerService.error(error);
      throw error;
    }
  }

  private static async streamToBuffer(stream: Readable): Promise<Buffer> {
    const buffer: Uint8Array[] = [];

    return new Promise((resolve, reject) =>
      stream
        .on('error', (error) => reject(error))
        .on('data', (data) => buffer.push(data))
        .on('end', () => resolve(Buffer.concat(buffer))),
    );
  }

  public async deleteOneLocalFile(filePath: string): Promise<void> {
    try {
      // Implement logic to delete a file from the local file system
      await fs.promises.unlink(filePath);

      this.loggerService.log('File deleted successfully');
    } catch (error) {
      throw error;
    }
  }

  public async deleteManyLocalFiles(filePaths: string[]): Promise<void> {
    const deletePromises = [];

    for (const filePath of filePaths) {
      // Use async/await to call deleteOneLocalFile asynchronously
      deletePromises.push(this.deleteOneLocalFile(filePath));
    }

    try {
      // Wait for all delete operations to complete in parallel
      await Promise.all(deletePromises);
    } catch (error) {
      throw error;
    }
  }

  public async uploadSingleLocalFile({
    userId,
    file,
    ratioForImage,
  }: {
    userId: string;
    file: Promise<FileUploadDto>;
    ratioForImage?: RatioEnum;
  }): Promise<string> {
    try {
      const { filename, createReadStream } = await file;

      // Identify the file type based on the file's extension or MIME type
      let fileExt = detectMimeTypeFromFilename(filename);
      let fileType: FileType;

      // If the file has an extension, get the file type from the extension
      if (fileExt) {
        fileExt = `${fileExt.toLowerCase()}`;
        fileType = mapFileTypeEnumFromMIME(fileExt);
      }

      // If the file type is not supported, throw an error
      if (!fileType || fileType === FileType.UNKNOWN) {
        throw new Error('Unsupported file type');
      }

      // Convert the file stream to a buffer
      let fileBuffer = await UploaderService.streamToBuffer(createReadStream());

      // Get the file size
      const fileSize = fileBuffer.length;

      // Check if the file size exceeds the maximum allowed size for the detected file type
      if (fileSize > MAX_FILE_SIZES[fileType]) {
        throw new Error('File size exceeds maximum allowed size');
      }

      // Generate a unique file name for the local file
      const key = `${userId}/${uuidV4()}${fileExt}`;

      // Specify the local directory where files will be stored
      const localDirectory = './uploads'; // Change to your desired local directory

      // Construct the full local file path
      const localFilePath = path.join(localDirectory, key);

      // Write the file buffer to the local file system
      await fs.promises.writeFile(localFilePath, fileBuffer);

      return localFilePath;
    } catch (error) {
      throw error;
    }
  }

  public async uploadMultipleLocalFiles({
    userId,
    files,
    ratioForImage,
  }: {
    userId: string;
    files: Promise<FileUploadDto>[];
    ratioForImage?: RatioEnum;
  }): Promise<string[]> {
    try {
      const uploadPromises = files.map(async (file) => {
        return await this.uploadSingleLocalFile({
          userId,
          file,
          ratioForImage,
        });
      });

      return await Promise.all(uploadPromises);
    } catch (error) {
      // Handle errors as needed
      throw error;
    }
  }

  public async listAllLocalFiles(prefix: string = ''): Promise<string[]> {
    try {
      // Implement logic to list all local files in the specified directory
      const localDirectory = './uploads'; // Change to your desired local directory

      const files = await fs.promises.readdir(localDirectory);

      return files.map((file) => path.join(localDirectory, file));
    } catch (error) {
      this.loggerService.error(error);
      throw error;
    }
  }
}
