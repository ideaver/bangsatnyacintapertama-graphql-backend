import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
// import { UploaderService } from '../services/uploader/uploader.service';

@Injectable()
export class SchedulerService {
  constructor() // private readonly uploaderService: UploaderService,
  {}
  private readonly logger = new Logger(SchedulerService.name);

  // @Cron(CronExpression.EVERY_WEEK) // Schedule every Sunday at midnight
  // async deleteOrphanedS3Objects() {
  //   try {
  //     await this.uploaderService.deleteOrphanedS3Objects();
  //     this.logger.log('deleteOrphanedS3Objects scheduler: Success');
  //   } catch (error) {
  //     this.logger.error('deleteOrphanedS3Objects scheduler: Failed');
  //   }
  // }
}
