export const schema = gql`
  type PlaidTransaction {
    id: String!
    name: String!
    amount: Float!
    currency: String!
    date: DateTime!
    authorizedDate: DateTime!
    pending: Boolean
  }

  type Query {
    plaidTransactions: Int! @skipAuth
    plaidAccountTransactions(accessToken: String!): Int! @requireAuth
  }
`
