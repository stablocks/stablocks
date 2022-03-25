export const schema = gql`
  type Query {
    availableSupervisors(userId: String): [User!]! @requireAuth
  }
`
