export const schema = gql`
  type Organization {
    id: Int!
    name: String!
    website: String
    logo: String
    email: String
    address: Address
    addressId: String
    recruiting: Boolean!
    crm: Boolean!
    marketing: Boolean!
    sales: Boolean!
    finance: Boolean!
    hr: Boolean!
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
    # logo: String
  }

  input UpdateOrganizationInput {
    name: String
    website: String
    logo: String
    email: String
    addressId: String
    recruiting: Boolean
    crm: Boolean
    marketing: Boolean
    sales: Boolean
    finance: Boolean
    hr: Boolean
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
