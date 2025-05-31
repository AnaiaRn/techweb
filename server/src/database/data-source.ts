import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { Product } from 'src/products/entities/product.entity';

dotenv.config(); 

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT!,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Product],
  synchronize: true,
});
