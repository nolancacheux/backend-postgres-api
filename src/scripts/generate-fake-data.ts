import { createConnection } from 'typeorm';
import { User } from '../models/user.entity';
import { faker } from '@faker-js/faker';
import * as dotenv from 'dotenv';

dotenv.config();

async function generateFakeData() {
  const connection = await createConnection({
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [User],
  });

  const userRepository = connection.getRepository(User);

  for (let i = 0; i < 100; i++) {
    const user = userRepository.create({
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    });

    await userRepository.save(user);
  }

  await connection.close();
}

generateFakeData();
