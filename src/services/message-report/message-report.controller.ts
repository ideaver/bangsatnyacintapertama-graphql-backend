import { Controller, Get, Injectable, Logger, Query } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';
import { GuestController } from '../guest/guest.controller';
import { Guest } from 'src/@generated';
import { MessageReportResponse } from './dto/message-report.model';
import { WhatsappStatusController } from '../whatsapp-status/whatsapp-status.controller';

@Injectable()
export class MessageReportController {
  private readonly logger = new Logger(MessageReportController.name);

  constructor(
    private readonly configService: ConfigService,
    private readonly whatsappStatusController: WhatsappStatusController,
  ) {}

  private readonly apiUrl = 'https://jogja.wablas.com/api/report-realtime';
  private readonly token = this.configService.get<string>('WA_TOKEN'); // Add your token here

  async getAllReports(
    @Query('page') page: number,
    @Query('limit') limit: number,
  ): Promise<MessageReportResponse[]> {
    try {
      const res = await this.whatsappStatusController.findMany({
        where: {
          messageId: {
            not: null,
          },
          guest: {
            is: {
              whatsappStatuses: {
                every: {
                  status: {
                    notIn: ['SENT', 'DELIVERED', 'READ'],
                  },
                },
              },
              confirmationStatus: null,
            },
          },
        },
        distinct: ['guestId'],
      });

      this.logger.log(`Fetched ${res.length} guests`);

      const messageIds: string[] = res.map((item) => item.messageId);

      const response = await axios.get(this.apiUrl, {
        params: {
          page,
          limit,
          message_id: messageIds[0], // Pass the joined string of message IDs
        },
        headers: {
          Authorization: this.token,
        },
      });

      const reports = response.data.message;
      this.logger.log(`Fetched ${reports.length} reports`);
      this.logger.debug(reports);
      return reports;
    } catch (error) {
      this.logger.error(error);
      return []; // Return an empty array for failed requests
    }
  }
}
