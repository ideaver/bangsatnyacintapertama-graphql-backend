import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { WaMediaMessage } from 'src/model/message.model';
import { WhatsappGatewayController } from 'src/services/whatsapp-gateway/whatsapp-gateway.controller';
import { WhatsappQueueController } from 'src/services/whatsapp-queue/whatsapp-queue.controller';
import { WhatsappQueueEvent } from './enum/whatsapp-queue-event.enum ';

@Injectable()
export class WhatsappQueueListener {
  private readonly logger = new Logger(WhatsappQueueListener.name);

  constructor(
    private readonly whatsappGatewayController: WhatsappGatewayController,
    private readonly whatsappQueueController: WhatsappQueueController,
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

        const image = `${invitationImage.path}`;

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
          const caption = `Extra Ticket Pass: Studio ${studio}, Seat ${seat}, ShowTime ${showTime} `;
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
        // Send whatsapp messages to whatsapp gateway
        const response =
          await this.whatsappGatewayController.sendWhatsappImages(
            waMediaMessages,
          );

        //if response string contain with error words
        if (response.message.includes('with error')) {
          this.logger.error(response);
          return;
        }

        // Update whatsapp queue status to SENT
        const count = await this.whatsappQueueController.updateMany({
          data: { status: { set: 'SENT' } },
          where: { id: { in: whatsappQueueWithQueueStatusId } },
        });

        this.logger.log(count + ' Broadcast Messages Sent To Whatsapp Gateway');
      }
    } catch (error) {
      this.logger.error(error);
    }
  }
}
