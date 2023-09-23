import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { GuestController } from '../services/guest/guest.controller';
import { WaMediaMessage, WaMessage } from 'src/model/message.model';
import { WhatsappGatewayController } from 'src/services/whatsapp-gateway/whatsapp-gateway.controller';
import { WhatsappQueueController } from 'src/services/whatsapp-queue/whatsapp-queue.controller';
import { QueueStatus } from '@prisma/client';
import { WhatsappQueueEvent } from './enum/whatsapp-queue-event.enum ';

@Injectable()
export class WhatsappQueueListener {
  private readonly logger = new Logger(WhatsappQueueListener.name);

  constructor(
    private readonly whatsappGatewayController: WhatsappGatewayController,
    private readonly whatsappQueueController: WhatsappQueueController,
    private readonly guestController: GuestController,
  ) {}

  @OnEvent(WhatsappQueueEvent.CreatedMany)
  async onWhatsappQueueCreatedManyEvent() {
    try {
      // Find guests with whatsapp queues
      const whatsappQueueWithQueueStatus =
        await this.whatsappQueueController.findMany({
          include: { guest: true },
          where: { status: { equals: 'QUEUE' } },
        });

      const waMediaMessages: WaMediaMessage[] = [];

      for (const whatsappQueue of whatsappQueueWithQueueStatus) {
        const {
          id,
          studio,
          seat,
          showTime,
          invitationName,
          whatsapp,
          groupMemberOf,
        } = whatsappQueue.guest;

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

        if (whatsapp) {
          // const waMessage: WaMessage = {
          //   refId: whatsappQueue.id.toString(),
          //   phone: whatsappQueue.guest.whatsapp,
          //   message: message,
          // };
          // waMessages.push(waMessage);

          const waMediaMessage: WaMediaMessage = {
            refId: id.toString(),
            phone: whatsapp,
            caption: message,
            image:
              'https://pbs.twimg.com/profile_images/1544722618275827713/9-aMN_Wb_400x400.jpg',
          };

          waMediaMessages.push(waMediaMessage);
        } else {
          const caption = `Studio ${studio}, Seat ${seat}, ShowTime ${showTime} `;
          const waMediaMessage: WaMediaMessage = {
            refId: id.toString(),
            phone: groupMemberOf.whatsapp,
            caption: caption,
            image:
              'https://pbs.twimg.com/profile_images/1544722618275827713/9-aMN_Wb_400x400.jpg',
          };

          waMediaMessages.push(waMediaMessage);
        }
      }

      if (waMediaMessages.length > 0) {
        // const res1 =
        //   await this.whatsappGatewayController.sendWhatsappMessages(waMessages);
        const res2 =
          await this.whatsappGatewayController.sendWhatsappImages(
            waMediaMessages,
          );

        this.logger.log(res2);
      }
    } catch (error) {
      throw new Error();
    }
  }
}
