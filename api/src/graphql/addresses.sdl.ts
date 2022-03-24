export const schema = gql`
  type Address {
    id: String!
    organization: Organization
    employee: EmployeeInfo
    contact: Contact
    company: Company
    address: String!
    addressTwo: String
    city: String!
    state: String!
    country: String!
    zip: Int!
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  type Query {
    addresses: [Address!]! @requireAuth
    address(id: String!): Address @requireAuth
  }

  input CreateAddressInput {
    address: String!
    addressTwo: String
    city: String!
    state: String!
    country: String!
    zip: Int!
  }

  input UpdateAddressInput {
    address: String
    addressTwo: String
    city: String
    state: String
    country: String
    zip: Int
  }

  type Mutation {
    createAddress(input: CreateAddressInput!): Address! @requireAuth
    updateAddress(id: String!, input: UpdateAddressInput!): Address!
      @requireAuth
    deleteAddress(id: String!): Address! @requireAuth
  }
`
