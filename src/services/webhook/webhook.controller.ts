import { Controller, Post, Body } from '@nestjs/common';

@Controller('tracking')
export class WebhookController {
  @Post()
  async trackWhatsAppMessage(@Body() payload: any): Promise<void> {
    const { id, status, phone, note, deviceId } = payload;

    // Handle the received data here
    console.log('Received WhatsApp message status update:');
    console.log(`Message ID: ${id}`);
    console.log(`Status: ${status}`);
    console.log(`Phone: ${phone}`);
    console.log(`Note: ${note}`);
    console.log(`Device ID: ${deviceId}`);

    // You can perform any necessary actions here based on the message status

    // Send a response (optional)
    return;
  }
}
