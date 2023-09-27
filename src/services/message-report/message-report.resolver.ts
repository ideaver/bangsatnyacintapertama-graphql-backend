// message-report.resolver.ts
import { Resolver, Query, Args } from '@nestjs/graphql';
import { MessageReportResponse } from './dto/message-report.model';
import { MessageReportController } from './message-report.controller';

@Resolver()
export class MessageReportResolver {
  constructor(
    private readonly messageReportController: MessageReportController,
  ) {}

  @Query(() => [MessageReportResponse], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async getAllReports(): Promise<MessageReportResponse[]> {
    await this.messageReportController.getAllReports(1, 10);

    return null;
  }
}
