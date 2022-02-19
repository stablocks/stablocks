export const schema = gql`
  type AppProvider {
    organization: Organization
    userCount: Int!
  }

  type Query {
    appProvider: AppProvider! @skipAuth
  }
`
