export const schema = gql`
  type SearchResult {
    id: String!
    title: String!
    type: String!
  }

  type Query {
    search(type: String!, query: String!): [SearchResult]! @requireAuth
  }
`
