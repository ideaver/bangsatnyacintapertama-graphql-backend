import { Controller, Post, Req } from '@nestjs/common';

@Controller('tracking')
export class WebhookController {
  @Post()
  async trackWhatsAppMessage(@Req() request): Promise<void> {
    const requestBody = request.body;

    const {
      id,
      pushName,
      isGroup,
      group,
      message,
      phone,
      messageType,
      file,
      mimeType,
      deviceId,
      sender,
      timestamp,
    } = requestBody;

    // Handle the WhatsApp message data here
    console.log('Received WhatsApp Message:');
    console.log(`ID: ${id}`);
    console.log(`Push Name: ${pushName}`);
    console.log(`Is Group: ${isGroup}`);
    console.log(`Message: ${message}`);
    console.log(`Phone: ${phone}`);
    console.log(`Message Type: ${messageType}`);
    console.log(`File: ${file}`);
    console.log(`MIME Type: ${mimeType}`);
    console.log(`Device ID: ${deviceId}`);
    console.log(`Sender: ${sender}`);
    console.log(`Timestamp: ${timestamp}`);
    return;
  }
}
