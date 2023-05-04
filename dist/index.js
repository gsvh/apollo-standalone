import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs, resolvers } from './schema/index.js';
const port = parseInt(process.env.PORT);
console.log('port: ', port);
const server = new ApolloServer({ typeDefs, resolvers });
const { url } = await startStandaloneServer(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
    listen: { port: port },
});
console.log(`🚀  Server ready at ${url}`);
