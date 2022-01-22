export const schema = gql`
  type Organization {
    id: Int!
    name: String!
    website: String
    logo: String
    email: String
    address: String
    addressTwo: String
    city: String
    state: String
    zipCode: Int
    recruiting: Boolean!
    crm: Boolean!
    helpdesk: Boolean!
    projects: Boolean!
    chatGreeting: String
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  type Query {
    organization: Organization @requireAuth
  }

  input CreateOrganizationInput {
    name: String!
    website: String
    logo: String
    email: String
    address: String
    addressTwo: String
    city: String
    state: String
    zipCode: Int
    recruiting: Boolean
    crm: Boolean
    helpdesk: Boolean
    projects: Boolean
    chatGreeting: String
  }

  input UpdateOrganizationInput {
    name: String
    website: String
    logo: String
    email: String
    address: String
    addressTwo: String
    city: String
    state: String
    zipCode: Int
    recruiting: Boolean
    crm: Boolean
    helpdesk: Boolean
    projects: Boolean
    chatGreeting: String
  }

  type Mutation {
    createOrganization(input: CreateOrganizationInput!): Organization! @skipAuth
    updateOrganization(input: UpdateOrganizationInput!): Organization!
      @requireAuth
    # deleteOrganization(id: Int!): Organization! @requireAuth
  }
`