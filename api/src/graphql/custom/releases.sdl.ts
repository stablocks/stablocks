export const schema = gql`
  type Release {
    tag: String!
    name: String!
    body: String!
  }

  type Query {
    releases: [Release!]! @skipAuth
  }
`
