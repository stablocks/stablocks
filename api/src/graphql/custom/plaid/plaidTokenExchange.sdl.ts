export const schema = gql`
  type Query {
    plaidTokenExchange(publicToken: String): Int! @requireAuth
  }
`
