import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { GuestEvents } from './enum/guest-event.enum';
import { GuestController } from '../services/guest/guest.controller';
import { Prisma, QueueStatus } from '@prisma/client';
import { Guest } from 'src/@generated';
import { WhatsappQueueController } from 'src/services/whatsapp-queue/whatsapp-queue.controller';
import { AxiosRequestConfig } from 'axios';
import FormData from 'form-data';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { ApiResponse } from 'src/model/api-response.model';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class WhatsappQueueListener {
  private readonly logger = new Logger(WhatsappQueueListener.name);

  constructor(
    private readonly configService: ConfigService,
    private readonly whatsappQueueController: WhatsappQueueController,
    private readonly guestController: GuestController,
    private readonly httpService: HttpService,
  ) {}

  @OnEvent(GuestEvents.CreatedMany)
  async onWhatsappQueueCreatedManyEvent() {
    const guestsWithoutWhatsappQueues =
      await this.findGuestsWithoutWhatsappQueue();

    const whatsappQueueCreateManyInputArray: Prisma.WhatsappQueueCreateManyInput[] =
      [];

    // Process each guest to have whatsapp queues
    for (const guest of guestsWithoutWhatsappQueues) {
      whatsappQueueCreateManyInputArray.push({
        guestId: guest.id,
        status: QueueStatus.QUEUE,
      });
    }

    await this.whatsappQueueController
      .createMany({
        data: whatsappQueueCreateManyInputArray,
      })
      .then(() => this.sendWhatsappMessage(6281938298740, 'test'));
  }

  // Find guests without QR codes
  private async findGuestsWithoutWhatsappQueue(): Promise<Guest[]> {
    return this.guestController.findMany({
      where: { whatsappQueue: { none: {} } },
    });
  }

  private async sendWhatsappMessage(
    phone: number,
    message: string,
  ): Promise<ApiResponse> {
    const api = this.configService.get<string>('WA_ENDPOINT');
    const data = new FormData();
    data.append('phone', phone);
    data.append('message', message);

    const config: AxiosRequestConfig = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `https://${api}/api/send-message`, // Note: Use the correct URL
      headers: {
        Authorization: this.configService.get<string>('TOKEN'),
        ...data.getHeaders(),
      },
      data: data,
    };

    try {
      const response = await firstValueFrom(this.httpService.request(config)); // Use firstValueFrom here
      this.logger.log(response.data);
      return response.data;
    } catch (error) {
      throw this.logger.error(error);
    }
  }
}
