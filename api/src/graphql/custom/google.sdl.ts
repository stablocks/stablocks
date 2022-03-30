export const schema = gql`
  type GoogleUser {
    email: String!
    firstName: String!
    lastName: String!
  }

  type Query {
    googleUsers: [GoogleUser!]! @requireAuth
    googleUser(email: String!): GoogleUser! @requireAuth
  }

  input CreateGoogleUserInput {
    firstName: String!
    lastName: String!
    email: String!
  }

  input UpdateGoogleUserInput {
    firstName: String
    lastName: String
    email: String
  }

  type Mutation {
    createGoogleUser(input: CreateGoogleUserInput!): GoogleUser! @requireAuth
    updateGoogleUser(
      email: String!
      input: CreateGoogleUserInput!
    ): GoogleUser! @requireAuth
    syncGoogleUsers: [GoogleUser!]! @requireAuth
  }
`
