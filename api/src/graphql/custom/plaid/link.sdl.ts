export const schema = gql`
  type Query {
    plaidLinkToken: String! @skipAuth
  }
`
