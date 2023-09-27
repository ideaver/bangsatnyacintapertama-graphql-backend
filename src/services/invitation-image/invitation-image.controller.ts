import { Injectable, Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { InvitationImageService } from './invitation-image.service';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { InvitationImageEvent } from 'src/event-listeners/enum/invitation-image-event.enum ';
import fetch from 'node-fetch';
import * as fs from 'fs';
import * as path from 'path';
import archiver from 'archiver';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';

@Injectable()
export class InvitationImageController {
  private readonly logger = new Logger(InvitationImageController.name);

  constructor(
    private readonly invitationImageService: InvitationImageService,
    private eventEmitter: EventEmitter2,
  ) {}

  async createOne(invitationImageCreateArgs: Prisma.InvitationImageCreateArgs) {
    return await this.invitationImageService.createOne(
      invitationImageCreateArgs,
    );
  }

  async createMany(
    invitationImageCreateManyArgs: Prisma.InvitationImageCreateManyArgs,
  ) {
    await this.invitationImageService
      .createMany(invitationImageCreateManyArgs)
      .then((res) => {
        this.eventEmitter.emit(InvitationImageEvent.CreatedMany);
        return res;
      });
  }

  async findOne(
    invitationImageFindUniqueArgs: Prisma.InvitationImageFindUniqueArgs,
  ) {
    return await this.invitationImageService.findOne(
      invitationImageFindUniqueArgs,
    );
  }

  async findMany(
    invitationImageFindManyArgs: Prisma.InvitationImageFindManyArgs,
  ) {
    return await this.invitationImageService.findMany(
      invitationImageFindManyArgs,
    );
  }

  async findFirst(
    invitationImageFindFirstArgs: Prisma.InvitationImageFindFirstArgs,
  ) {
    return await this.invitationImageService.findFirst(
      invitationImageFindFirstArgs,
    );
  }

  async updateOne(
    invitationImageUpdateOneArgs: Prisma.InvitationImageUpdateArgs,
  ) {
    return await this.invitationImageService.updateOne(
      invitationImageUpdateOneArgs,
    );
  }

  async updateMany(
    invitationImageUpdateManyArgs: Prisma.InvitationImageUpdateManyArgs,
  ) {
    return await this.invitationImageService.updateMany(
      invitationImageUpdateManyArgs,
    );
  }

  async delete(invitationImageDeleteArgs: Prisma.InvitationImageDeleteArgs) {
    return await this.invitationImageService.delete(invitationImageDeleteArgs);
  }

  async deleteMany(
    invitationImageDeleteManyArgs: Prisma.InvitationImageDeleteManyArgs,
  ) {
    return await this.invitationImageService.deleteMany(
      invitationImageDeleteManyArgs,
    );
  }

  async aggregate(
    invitationImageAggregateArgs: Prisma.InvitationImageAggregateArgs,
  ) {
    return await this.invitationImageService.aggregate(
      invitationImageAggregateArgs,
    );
  }

  async count(invitationImageCountArgs: Prisma.InvitationImageCountArgs) {
    return await this.invitationImageService.count(invitationImageCountArgs);
  }

  async resend() {
    this.eventEmitter.emit(InvitationImageEvent.Resend);
    return true;
  }

  async zipManyImages(guestIds: string[]): Promise<string> {
    const invitationImages = await this.findMany({
      select: { path: true },
      where: {
        guest: { id: { in: guestIds } },
        path: { contains: 'https' },
      },
    });

    const imageUrls = invitationImages.map((image) => image.path);
    this.logger.log(`Found ${imageUrls.length} images`);

    try {
      const outputFolderPath = 'files/zip';
      const outputFilePath = path.join(
        outputFolderPath,
        `${imageUrls.length}-images.zip`,
      );

      // Check if the output file already exists and delete it if it does
      if (fs.existsSync(outputFilePath)) {
        fs.unlinkSync(outputFilePath);
      }

      if (!fs.existsSync(outputFolderPath)) {
        fs.mkdirSync(outputFolderPath, { recursive: true });
      }

      const output = fs.createWriteStream(outputFilePath);
      const archive = archiver('zip', {
        zlib: { level: 9 },
      });

      output.on('close', () => {
        this.logger.log(archive.pointer() + ' total bytes');
        this.logger.log(
          'archiver has been finalized and the output file descriptor has closed.',
        );
      });

      output.on('end', () => {
        this.logger.log('Data has been drained');
      });

      archive.on('warning', (err) => {
        if (err.code === 'ENOENT') {
          this.logger.warn(err);
        } else {
          throw new IGraphQLError(err.message);
        }
      });

      archive.on('error', (err) => {
        throw new IGraphQLError(err.message);
      });

      archive.pipe(output);

      const imageBuffers = await this.downloadImages(imageUrls);

      for (let i = 0; i < imageBuffers.length; i++) {
        const imageBuffer = imageBuffers[i];
        if (imageBuffer) {
          const imageName = path.basename(imageUrls[i]);
          archive.append(imageBuffer, { name: imageName });
        }
      }

      archive.finalize();
      this.logger.log(`Images saved to ${outputFilePath}`);
      return `https://bangsatnyacintapertama.com/${outputFilePath}`;
    } catch (error) {
      this.logger.error(error);
    }
  }

  async downloadImages(imageUrls: string[]): Promise<Buffer[]> {
    const imagePromises = imageUrls.map(async (imageUrl) => {
      try {
        const response = await fetch(imageUrl);
        if (!response.ok) {
          throw new IGraphQLError({
            err: `Failed to download image from ${imageUrl}`,
          });
        }
        return response.buffer();
      } catch (error) {
        throw new IGraphQLError({
          err: `Error downloading image from ${imageUrl}: ${error.message}`,
        });
      }
    });

    return Promise.all(imagePromises);
  }
}
