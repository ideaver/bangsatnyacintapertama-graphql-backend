import { Injectable, Logger } from '@nestjs/common';
import { AxiosRequestConfig } from 'axios';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { WaMediaMessage, WaMessage } from 'src/model/message.model';

@Injectable()
export class WhatsappGatewayService {
  private readonly logger = new Logger(WhatsappGatewayService.name);
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  private api = this.configService.get<string>('WA_ENDPOINT');
  private token = this.configService.get<string>('WA_TOKEN');

  async sendWhatsappMessages(
    waMessages: WaMessage[],
  ): Promise<ResponseWithDataAndMessages> {
    const data = {
      data: waMessages.map((message) => ({
        phone: message.phone.toString(),
        message: message.message,
        ref_id: message.refId || '', // Optional ref_id
        retry: true, // Optional retry
        random: true, // Optional random
        source: 'backendapp',
      })),
    };

    const config: AxiosRequestConfig = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `https://${this.api}/api/v2/send-message`,
      headers: {
        Authorization: this.token,
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(data),
    };

    try {
      const response = await firstValueFrom(this.httpService.request(config)); // Use firstValueFrom here
      return response.data;
    } catch (error) {
      if (error.response) {
        // The server responded with a status code that falls outside of the range of 2xx
        this.logger.error(
          `Request failed with status code ${error.response.status}`,
        );
        this.logger.error(error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        this.logger.error('No response received from the server');
      } else {
        // Something happened in setting up the request that triggered an error
        this.logger.error(
          'An error occurred while setting up the request',
          error.message,
        );
      }
      throw this.logger.error(error);
    }
  }

  async sendWhatsappImages(
    waMediaMessages: WaMediaMessage[],
  ): Promise<ResponseWithDataAndImageMessages> {
    const data = {
      data: waMediaMessages.map((waMediaMessage) => ({
        phone: waMediaMessage.phone.toString(),
        image: waMediaMessage.image,
        caption: waMediaMessage.caption || '', // You can add a caption if needed
        ref_id: waMediaMessage.refId || '', // Optional ref_id
        retry: true, // Optional retry
        random: true, // Optional random
        source: 'backendapp', // Optional source
      })),
    };

    this.logger.log(data);

    const config: AxiosRequestConfig = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `https://${this.api}/api/v2/send-image`,
      headers: {
        Authorization: this.token,
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(data),
    };

    try {
      const response = await firstValueFrom(this.httpService.request(config));
      this.logger.log(response.data);
      return response.data;
    } catch (error) {
      if (error.response) {
        // The server responded with a status code that falls outside of the range of 2xx
        this.logger.error(
          `Request failed with status code ${error.response.status}`,
        );
        this.logger.error(error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        this.logger.error('No response received from the server');
      } else {
        // Something happened in setting up the request that triggered an error
        this.logger.error(
          'An error occurred while setting up the request',
          error.message,
        );
      }
      throw this.logger.error(error);
    }
  }
}
