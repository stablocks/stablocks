export const schema = gql`
  type Query {
    plaidLinkToken: String! @requireAuth
  }
`
