import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { PrismaService } from '../prisma/prisma.service';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AuthModule } from './services/auth/auth.module';
import { UserModule } from './services/user/user.module';
// import { EmailModule } from './services/email/email.module';
import { ConfigsModule } from './config/config.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UploaderModule } from './services/uploader/uploader.module';
import { UploaderProcessor } from './queues/uploader.queue';
import { SchedulerService } from './scheduler/scheduler.service';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { SchedulerModule } from './scheduler/scheduler.module';
import { GuestModule } from './services/guest/guest.module';
// import { EmailQueueModule } from './services/email-queue/email-queue.module';
import { WhatsappQueueModule } from './services/whatsapp-queue/whatsapp-queue.module';
import { QrCodeModule } from './services/qr-code/qr-code.module';
import { InvitationImageModule } from './services/invitation-image/invitation-image.module';
import { WebHookModule } from './services/webhook/webhook.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    //for Queue
    BullModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        redis: {
          host: configService.get<string>('REDIS_HOST'),
          port: configService.get<number>('REDIS_PORT'),
        },
      }),
      inject: [ConfigService],
    }),
    //register uploader queue
    BullModule.registerQueue({
      name: 'uploader',
    }),
    //for shceduler
    SchedulerModule,
    EventEmitterModule.forRoot(),
    ConfigsModule,
    // EmailModule,
    UploaderModule,
    UserModule,
    AuthModule,
    GuestModule,
    // EmailQueueModule,
    WhatsappQueueModule,
    QrCodeModule,
    InvitationImageModule,
    WebHookModule,
  ],
  providers: [PrismaService, UploaderProcessor, SchedulerService],
})
export class AppModule {}
