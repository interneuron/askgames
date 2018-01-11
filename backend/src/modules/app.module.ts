import { MiddlewaresConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { GraphQLFactory, GraphQLModule } from '@nestjs/graphql';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { ApiModule } from './api/api.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    GraphQLModule,
    ApiModule,
  ],
  controllers: [
    AppController,
  ],
  components: [],
})
export class ApplicationModule implements NestModule {
  constructor(private readonly graphQLFactory: GraphQLFactory) {
  }

  configure(consumer: MiddlewaresConsumer) {
    const typeDefs = this.graphQLFactory.mergeTypesByPaths('./**/*.graphql');
    console.log('typeDefs', typeDefs);
    const schema = this.graphQLFactory.createSchema({typeDefs});
    consumer
        .apply(graphiqlExpress({endpointURL: '/graphql'}))
        .forRoutes({path: '/graphiql', method: RequestMethod.GET})
        .apply(graphqlExpress(req => ({schema, rootValue: req})))
        .forRoutes({path: '/graphql', method: RequestMethod.ALL});
  }
}
