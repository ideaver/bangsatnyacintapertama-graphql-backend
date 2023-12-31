import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { RatioEnum } from './enums/ratio.enum';
// Ignore the import errors
// @ats-ignore
import { FileUpload, GraphQLUpload } from 'graphql-upload';
import { UploaderService } from './uploader.service';
import { UploaderController } from './uploader.controller';
import BatchPayload from 'src/model/batch-payload.model';

@Resolver()
export class UploaderResolver {
  constructor(
    private readonly uploaderService: UploaderService,
    private readonly uploaderController: UploaderController,
  ) {}

  @Mutation(() => BatchPayload, {
    nullable: true,
    description:
      'Header wajib ada apollo-require-preflight = true agar tidak CSRF error. File JPG akan dicompress',
  })
  async uploadSingleFile(
    @Args({ name: 'file', type: () => GraphQLUpload, nullable: true })
    file: FileUpload,
  ) {
    return await this.uploaderController.uploadSingleFile(file);
  }

  // @Mutation(() => [String], {
  //   nullable: true,
  //   description:
  //     'Header wajib ada apollo-require-preflight = true agar tidak CSRF error. File JPG akan dicompress',
  // })
  // async uploadMultiFile(
  //   @Args({ name: 'files', type: () => [GraphQLUpload], nullable: true })
  //   files: FileUpload[],
  //   @Args('userId', { type: () => String, nullable: false }) userId: string,
  //   @Args('ratioForImage', { type: () => RatioEnum, nullable: true })
  //   ratioForImage?: RatioEnum,
  // ) {
  //   const uploadedFiles = await Promise.all(files);

  //   return await this.uploaderService.uploadMultipleLocalFiles({
  //     userId: userId,
  //     ratioForImage: ratioForImage ?? RatioEnum.SQUARE,
  //     files: uploadedFiles,
  //   });
  // }
}
