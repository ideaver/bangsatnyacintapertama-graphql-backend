import { registerAs } from '@nestjs/config';
import * as dotenv from 'dotenv';
import { IConfig } from 'src/services/uploader/interfaces/config.interface';

export enum ConfigKey {
  App = 'APP',
  Db = 'DB',
  Rd = 'RD',
  Mail = 'MAIL',
  WA = 'WA',
}

export enum Environment {
  // Local = 'local',
  Development = 'development',
  // Staging = 'staging',
  Production = 'production',
  // Testing = 'testing',
}

// Load environment-specific config files based on NODE_ENV
const envFilePath = `.env.${process.env.NODE_ENV || 'development'}`;
dotenv.config({ path: envFilePath });

const APPConfig = registerAs(ConfigKey.App, () => ({
  env:
    Environment[process.env.NODE_ENV as keyof typeof Environment] ||
    'development',
  port: Number(process.env.APP_PORT),
  appName: process.env.APP_NAME,
}));

const DBConfig = registerAs(ConfigKey.Db, () => ({
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
}));

const RDConfig = registerAs(ConfigKey.Rd, () => ({
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT),
}));

const MAILConfig = registerAs(ConfigKey.Rd, () => ({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  username: process.env.MAIL_USERNAME,
  password: process.env.MAIL_PASSWORD,
}));

const WAConfig = registerAs(ConfigKey.WA, () => ({
  endpoint: process.env.WA_ENDPOINT,
  token: process.env.WA_TOKEN,
}));

export const configurations = [
  APPConfig,
  DBConfig,
  RDConfig,
  MAILConfig,
  WAConfig,
];
