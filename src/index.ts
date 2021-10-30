import "reflect-metadata";
import {ApolloServer} from "apollo-server-express";
import Express from "express";
import {buildSchema} from "type-graphql";
import {HelloResolver} from "./resolvers/hello";

const main = async () => {
  const app = Express();

  const schema = await buildSchema({
    resolvers: [HelloResolver],
    validate: false,
  });

  const server = new ApolloServer({
    schema,
  });

  await server.start();

  server.applyMiddleware({app});

  const port = process.env.PORT || 4000;

  app.listen({port}, () => {
    console.log(`server running on port http://localhost:${port}/graphql`);
  });
};

main();
