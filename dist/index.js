import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs, resolvers } from './schema/index.js';
console.log('4');
const port = parseInt(process.env.PORT) || 3000;
console.log('port: ', port);
console.log('7');
const server = new ApolloServer({ typeDefs, resolvers });
console.log('9');
const { url } = await startStandaloneServer(server, {
    listen: { port: port },
});
console.log('13');
console.log(`🚀  Server ready at ${url}`);
