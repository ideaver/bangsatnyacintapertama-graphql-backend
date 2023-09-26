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
    await this.sendToWhatsappGateway();
  }

  @OnEvent(InvitationImageEvent.Resend)
  async onInvitationImageResend() {
    await this.sendToWhatsappGateway();
  }

  private async sendToWhatsappGateway() {
    try {
      const GuestsWhereWhatsappStatusNeverSent =
        await this.guestFindManyWhereWhatsappStatusNeverSent();

      this.logger.log(
        `Found ${GuestsWhereWhatsappStatusNeverSent.length} guests need to be sent to Whatsapp Gateway`,
      );

      const batchSize = 50; // Number of guests to process in each batch
      let batchCount = 0; // Initialize batch count

      for (
        let i = 0;
        i < GuestsWhereWhatsappStatusNeverSent.length;
        i += batchSize
      ) {
        const guestsBatch = GuestsWhereWhatsappStatusNeverSent.slice(
          i,
          i + batchSize,
        );

        const waMediaMessages = [];
        const whatsappStatusCreateManyInputArray: Prisma.WhatsappStatusCreateManyInput[] =
          [];

        for (const guest of guestsBatch) {
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
          const image = invitationImage.path;

          let message = `
            Halo Bpk/ Ibu ${invitationName}
            
            Kami dari Dogma Pictures. 
            Dengan ini bermaksud mengundang Bapak/Ibu ${invitationName} ke Gala Premiere Film Bangsatnya Cinta Pertama directed by Mas Eugene Panji.
    
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

          const waMediaMessage: WaMediaMessage = {
            refId: uuid,
            phone: groupMemberOfId === null ? whatsapp : groupMemberOf.whatsapp,
            caption:
              groupMemberOfId === null
                ? message
                : `Extra Ticket Pass: Studio ${studio}, Seat ${seat}, ShowTime ${showTime}`,
            image: image,
          };

          // Add to batch
          waMediaMessages.push(waMediaMessage);

          // Add to whatsappStatusCreateManyInput
          whatsappStatusCreateManyInputArray.push({
            refId: uuid,
            status: QueueStatus.QUEUE,
            guestId: id,
          });
        }

        // Send to Whatsapp Gateway
        if (waMediaMessages.length > 0) {
          // Send to Whatsapp Gateway for this batch
          const response =
            await this.whatsappGatewayController.sendWhatsappImages(
              waMediaMessages,
            );

          // Update Whatsapp Statuses
          response?.data?.messages?.forEach((message) => {
            const statusMap = {
              sent: QueueStatus.SENT,
              read: QueueStatus.READ,
              cancel: QueueStatus.ABORT,
              received: QueueStatus.DELIVERED,
              reject: QueueStatus.FAILED,
              pending: QueueStatus.QUEUE,
            };

            // Default to QUEUE if the status is unknown
            const receivedStatus =
              statusMap[message.status] || QueueStatus.QUEUE; // Default to QUEUE if the status is unknown

            // Find index of element with refId
            const indexToUpdate = whatsappStatusCreateManyInputArray.findIndex(
              (item) => item.refId === message.ref_id,
            );

            // Update status and messageId
            if (indexToUpdate !== -1) {
              // Update status
              whatsappStatusCreateManyInputArray[indexToUpdate].status =
                receivedStatus;
              // Update messageId
              whatsappStatusCreateManyInputArray[indexToUpdate].messageId =
                message.id;
            } else {
              this.logger.error(
                `Element with refId '${message.ref_id}' not found. to update ${message.status} status`,
              );
            }
          });

          // Save to database
          const count = await this.whatsappStatusController.createMany({
            data: whatsappStatusCreateManyInputArray,
          });

          batchCount++; // Increment batch count

          this.logger.log(
            `${response?.data?.messages?.length} of ${waMediaMessages.length} Broadcast Messages Sent To Whatsapp Gateway.  ${count.count} Whatsapp Statuses Saved To Database. - Batch ${batchCount}`,
          );
        }
      }
    } catch (error) {
      this.logger.error(error);
    }
  }

  // Find guests without QR codes
  private async guestFindManyWhereWhatsappStatusNeverSent(): Promise<Guest[]> {
    return this.guestController.findMany({
      include: {
        invitationImage: true,
        groupMemberOf: true,
      },
      where: {
        whatsappStatuses: {
          every: { status: { notIn: ['SENT', 'DELIVERED', 'READ'] } },
        },
        confirmationStatus: null,
      },
    });
  }
}
