import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { GuestController } from '../services/guest/guest.controller';
import { Prisma, QueueStatus } from '@prisma/client';
import { Guest } from 'src/@generated';
import { WhatsappStatusController } from 'src/services/whatsapp-status/whatsapp-status.controller';
import { InvitationImageEvent } from './enum/invitation-image-event.enum ';
import { v4 as uuidV4 } from 'uuid';
import { WaMediaMessage } from 'src/model/message.model';
import { WhatsappGatewayController } from 'src/services/whatsapp-gateway/whatsapp-gateway.controller';

@Injectable()
export class InvitationImageListener {
  private readonly logger = new Logger(InvitationImageListener.name);

  constructor(
    private readonly whatsappStatusController: WhatsappStatusController,
    private readonly guestController: GuestController,
    private readonly whatsappGatewayController: WhatsappGatewayController,
  ) {}

  @OnEvent(InvitationImageEvent.CreatedMany)
  async onInvitationImageCreatedManyEvent() {
    try {
      const guestsWithoutWhatsappStatus =
        await this.findGuestsWithoutWhatsappStatus();

      const waMediaMessages: WaMediaMessage[] = [];
      const whatsappStatusCreateManyInput: Prisma.WhatsappStatusCreateManyInput[] =
        [];

      for (const guest of guestsWithoutWhatsappStatus) {
        const {
          id,
          studio,
          seat,
          showTime,
          whatsapp,
          invitationName,
          groupMemberOf,
          groupMemberOfId,
          invitationImage,
        } = guest;

        const uuid = uuidV4();

        const image = `${invitationImage.path}`;

        let message = `
        Halo Bpk/ Ibu ${invitationName}

Kami dari Dogma Pictures. 
Dengan ini  bermaksud mengundang Bapak/Ibu ${invitationName} ke Gala Premiere Film Bangsatnya Cinta Pertama directed by Mas Eugene Panji.

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


Catatan : Diharapkan hadir 1 jam sebelum show time (jam tayang) untuk registrasi dan penukaran tiket 

Terima kasih,
Dogma Pictures Team
        `;

        if (groupMemberOfId === null) {
          const waMediaMessage: WaMediaMessage = {
            refId: uuid,
            phone: whatsapp,
            caption: message,
            image: image,
          };

          waMediaMessages.push(waMediaMessage);
        } else {
          message = `Extra Ticket Pass: Studio ${studio}, Seat ${seat}, ShowTime ${showTime} `;
          const waMediaMessage: WaMediaMessage = {
            refId: uuid,
            phone: groupMemberOf.whatsapp,
            caption: message,
            image: image,
          };

          waMediaMessages.push(waMediaMessage);
        }

        whatsappStatusCreateManyInput.push({
          refId: uuid,
          message: message,
          status: QueueStatus.QUEUE,
          guestId: id,
        });
      }

      if (waMediaMessages.length > 0) {
        // Send whatsapp messages to whatsapp gateway
        const response =
          await this.whatsappGatewayController.sendWhatsappImages(
            waMediaMessages,
          );

        // //if response string contain with error words
        // if (response.message.includes('with error')) {
        //   this.logger.error(response);
        //   return;
        // }

        // Update whatsapp status status to SENT
        const count = await this.whatsappStatusController.createMany({
          data: whatsappStatusCreateManyInput,
        });

        this.logger.log(count + ' Broadcast Messages Sent To Whatsapp Gateway');
      }
    } catch (error) {
      this.logger.error(error);
    }
  }

  // Find guests without QR codes
  private async findGuestsWithoutWhatsappStatus(): Promise<Guest[]> {
    return this.guestController.findMany({
      include: {
        invitationImage: true,
        groupMemberOf: true,
      },
      where: { whatsappStatuses: { none: {} } },
    });
  }
}
