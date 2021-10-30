"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
const type_graphql_1 = require("type-graphql");
const hello_1 = require("./resolvers/hello");
const main = async () => {
    const app = (0, express_1.default)();
    const schema = await (0, type_graphql_1.buildSchema)({
        resolvers: [hello_1.HelloResolver],
        validate: false,
    });
    const server = new apollo_server_express_1.ApolloServer({
        schema,
    });
    await server.start();
    server.applyMiddleware({ app });
    const port = process.env.PORT || 4000;
    app.listen({ port }, () => {
        console.log(`server running on port http://localhost:${port}/graphql`);
    });
};
main();
//# sourceMappingURL=index.js.map