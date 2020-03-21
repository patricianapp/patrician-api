
import { ConnectionOptions } from 'typeorm/connection/ConnectionOptions';
import * as dotenv from 'dotenv';

dotenv.config();

export const typeOrmConfig: ConnectionOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOSTNAME,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB_NAME,
  entities: [__dirname + '/entities/*.ts'],
  synchronize: (process.env.TYPEORM_SYNC === 'true') || true,
  logger: 'advanced-console',
  logging: 'all',
  cache: true,
  dropSchema: true,
};