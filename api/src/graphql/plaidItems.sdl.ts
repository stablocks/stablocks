export const schema = gql`
  type PlaidItem {
    id: String!
    accessToken: String!
    itemId: String!
  }

  type Query {
    plaidItems: [PlaidItem!]! @requireAuth
    plaidItem(id: String!): PlaidItem @requireAuth
  }

  input CreatePlaidItemInput {
    accessToken: String!
    itemId: String!
  }

  input UpdatePlaidItemInput {
    accessToken: String
    itemId: String
  }

  type Mutation {
    createPlaidItem(input: CreatePlaidItemInput!): PlaidItem! @requireAuth
    updatePlaidItem(id: String!, input: UpdatePlaidItemInput!): PlaidItem!
      @requireAuth
    deletePlaidItem(id: String!): PlaidItem! @requireAuth
  }
`
