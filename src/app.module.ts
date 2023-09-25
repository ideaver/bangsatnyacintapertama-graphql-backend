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
import { WhatsappStatusModule } from './services/whatsapp-status/whatsapp-status.module';
import { QrCodeModule } from './services/qr-code/qr-code.module';
import { InvitationImageModule } from './services/invitation-image/invitation-image.module';
import { WhatsappGatewayModule } from './services/whatsapp-gateway/whatsapp-gateway.module';
import { WebhookModule } from './services/webhook/webhook.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
      playground: false,
      introspection: true,
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
    EventEmitterModule.forRoot({
      // set this to `true` to use wildcards
      // wildcard: false,
      // // the delimiter used to segment namespaces
      // delimiter: '.',
      // // set this to `true` if you want to emit the newListener event
      // newListener: false,
      // // set this to `true` if you want to emit the removeListener event
      // removeListener: false,
      // the maximum amount of listeners that can be assigned to an event
      maxListeners: 1,
      // show event name in memory leak message when more than maximum amount of listeners is assigned
      verboseMemoryLeak: true,
      // disable throwing uncaughtException if an error event is emitted and it has no listeners
      ignoreErrors: false,
    }),
    ConfigsModule,
    // EmailModule,
    UploaderModule,
    UserModule,
    AuthModule,
    GuestModule,
    // EmailQueueModule,
    WhatsappStatusModule,
    QrCodeModule,
    InvitationImageModule,
    WebhookModule,
    WhatsappGatewayModule,
  ],
  providers: [PrismaService, UploaderProcessor, SchedulerService],
})
export class AppModule {}
