import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { GuestController } from '../services/guest/guest.controller';
import { WaMediaMessage, WaMessage } from 'src/model/message.model';
import { WhatsappGatewayController } from 'src/services/whatsapp-gateway/whatsapp-gateway.controller';
import { WhatsappQueueController } from 'src/services/whatsapp-queue/whatsapp-queue.controller';
import { QueueStatus } from '@prisma/client';
import { WhatsappQueueEvent } from './enum/whatsapp-queue-event.enum ';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class WhatsappQueueListener {
  private readonly logger = new Logger(WhatsappQueueListener.name);

  constructor(
    private readonly whatsappGatewayController: WhatsappGatewayController,
    private readonly whatsappQueueController: WhatsappQueueController,
    private readonly guestController: GuestController,
    private readonly configService: ConfigService,
  ) {}
  @OnEvent(WhatsappQueueEvent.CreatedMany)
  async onWhatsappQueueCreatedManyEvent() {
    try {
      // Find guests with whatsapp queues
      const whatsappQueueWithQueueStatus =
        await this.whatsappQueueController.findMany({
          include: {
            guest: { include: { groupMemberOf: true, invitationImage: true } },
          },
          where: { status: { equals: 'QUEUE' } },
        });

      const waMediaMessages: WaMediaMessage[] = [];
      const whatsappQueueWithQueueStatusId: string[] = [];

      let imageHost = 'https://bangsatnyacintapertama.com';

      if (this.configService.get<string>('NODE_ENV') === 'development') {
        imageHost = 'http://localhost:3000';
      }

      for (const whatsappQueue of whatsappQueueWithQueueStatus) {
        const {
          id,
          studio,
          seat,
          showTime,
          invitationName,
          groupMemberOf,
          groupMemberOfId,
          invitationImage,
        } = whatsappQueue.guest;

        const image = `${imageHost}/${invitationImage.path}`;

        const message = `
        Halo Bpk/ Ibu ${invitationName}
  
  Kami dari Dogma Pictures. 
  Dengan ini  bermaksud mengundang Bapak/Ibu ${whatsappQueue.guest.invitationName} ke Gala Premiere Film Bangsatnya Cinta Pertama directed by Mas Eugene Panji.
  
  Gala Premiere akan dilaksanakan pada:
  
  Tanggal : 28 September 2023
  Venue    : XXI Epicentrum Kuningan
  Jl H.R Rasuna Said, Setiabudi, Jakarta Selatan
  (Informasi jam dan tempat duduk terlampir pada e-invitation)
  
  Mohon kiranya Bapak/Ibu dapat memberikan konfirmasi kehadiran Gala Premiere tersebut kepada kami dengan membalas pesan ini  :
  1. Ya (untuk yang akan Hadir)
  2. Tidak ( untuk yang Tidak akan Hadir)
  
  Contoh Balasan :
  Ya
  
  Atau 
  
  Contoh Balasan:
  1.
  
  
  Terima kasih,
  Dogma Pictures Team
        
        `;

        if (groupMemberOfId === null) {
          const waMediaMessage: WaMediaMessage = {
            refId: id,
            phone: whatsappQueue.guest.whatsapp,
            caption: message,
            image: image,
          };

          waMediaMessages.push(waMediaMessage);
        } else {
          const caption = `Tiket Pass Extra: Studio ${studio}, Seat ${seat}, ShowTime ${showTime} `;
          const waMediaMessage: WaMediaMessage = {
            refId: id,
            phone: groupMemberOf.whatsapp,
            caption: caption,
            image: image,
          };

          waMediaMessages.push(waMediaMessage);
        }

        whatsappQueueWithQueueStatusId.push(whatsappQueue.id);
      }

      if (waMediaMessages.length > 0) {
        await this.whatsappGatewayController.sendWhatsappImages(
          waMediaMessages,
        );

        //
        await this.whatsappQueueController.updateMany({
          data: { status: { set: 'SENT' } },
          where: { id: { in: whatsappQueueWithQueueStatusId } },
        });

        this.logger.log('Broadcast Message In Gateway');
      }
    } catch (error) {
      this.logger.error(error);
    }
  }
}
