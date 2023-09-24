import { Controller, Post, Req } from '@nestjs/common';

@Controller('tracking')
export class WebhookController {
  @Post()
  async trackWhatsAppMessage(@Req() request): Promise<void> {
    const requestBody = request.body;

    // Extract data from the WhatsApp webhook payload
    const { id, status, phone, note, deviceId } = requestBody;

    // Handle the WhatsApp message status data here
    console.log('Received WhatsApp Message Status Update:');
    console.log(`ID: ${id}`);
    console.log(`Status: ${status}`);
    console.log(`Phone: ${phone}`);
    console.log(`Note: ${note}`);
    console.log(`Device ID: ${deviceId}`);

    // You can add your logic here to process the status update as needed.
    // For example, you can store it in a database or trigger further actions.

    return;
  }

  @Post('incoming') // route for incoming WhatsApp messages
  async receiveIncomingWhatsAppMessage(@Req() request): Promise<void> {
    const requestBody = request.body;

    // Extract data from the incoming WhatsApp message payload
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

    // Handle the incoming WhatsApp message data here
    console.log('Received WhatsApp Incoming Message:');
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

    // You can add your logic here to process the incoming message as needed.
    // For example, you can store it in a database or trigger further actions.

    return;
  }
}
