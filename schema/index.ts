export const typeDefs = `
    type Champion {
    id: String
    name: String
    title: String
    lore: String
    }

    type Query {
    champions: [Champion]
    champion(id: String): Champion
    }
`
export const resolvers = {
  Query: {
    // Query to fetch all of the champions
    champions: async () => {
      const response = await fetch(
        'https://ddragon.leagueoflegends.com/cdn/13.7.1/data/en_US/champion.json'
      )

      // TODO: Properly type instead of any
      const data: any = await response.json()

      return Object.values(data.data)
    },

    // Query to fetch a single champion given its ID
    champion: async (_, { id }) => {
      const response = await fetch(
        `https://ddragon.leagueoflegends.com/cdn/13.7.1/data/en_US/champion/${id}.json`
      )

      // TODO: Properly type instead of any
      const data: any = await response.json()

      return data.data[id]
    },
  },
}
