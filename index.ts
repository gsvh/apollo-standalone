import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { typeDefs, resolvers } from './schema/index.js'

interface MyContext {
  token?: String
}

const server = new ApolloServer<MyContext>({ typeDefs, resolvers })

const { url } = await startStandaloneServer(server, {
  context: async ({ req }) => ({ token: req.headers.token }),
  listen: { port: 4000 },
})
console.log(`🚀  Server ready at ${url}`)
