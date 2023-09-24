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
}
