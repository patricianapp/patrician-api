import * as path from 'path';
import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { Container } from 'typedi';
import * as TypeORM from 'typeorm';
import * as TypeGraphQL from 'type-graphql';

import { typeOrmConfig } from './config';

import { RecipeResolver } from './resolvers/recipe-resolver';
import { RateResolver } from './resolvers/rate-resolver';
import { User } from './entities/user';
import * as dotenv from 'dotenv';
dotenv.config();

export interface Context {
  user: User;
}

// register 3rd party IOC container
TypeORM.useContainer(Container);

Container.set('currentUser', 'user1');

async function bootstrap() {
  try {
    // create TypeORM connection
    await TypeORM.createConnection(typeOrmConfig);

    // build TypeGraphQL executable schema
    const schema = await TypeGraphQL.buildSchema({
      resolvers: [__dirname + '/resolvers/*.ts'],
      container: Container,
      emitSchemaFile: true,
    });

    // Create GraphQL server
    const server = new ApolloServer({ schema });

    // Start the server
    const { url } = await server.listen(process.env.PORT);
    console.log(`Server is running, GraphQL Playground available at ${url}`);
  } catch (err) {
    console.error(err);
  }
}

bootstrap();
