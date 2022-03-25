export const schema = gql`
  type Company {
    id: String!
    name: String!
    website: String
    phone: Int
    address: Address
    addressId: String
    contacts: [Contact]!
    employee: EmployeeInfo!
    employeeId: String!
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  type Query {
    companies: [Company!]! @requireAuth
    company(id: String!): Company @requireAuth
  }

  input CreateCompanyInput {
    name: String!
    website: String
    phone: Int
    addressId: String
    employeeId: String!
  }

  input UpdateCompanyInput {
    name: String
    website: String
    phone: Int
    addressId: String
    employeeId: String
  }

  type Mutation {
    createCompany(input: CreateCompanyInput!): Company! @requireAuth
    updateCompany(id: String!, input: UpdateCompanyInput!): Company!
      @requireAuth
    deleteCompany(id: String!): Company! @requireAuth
  }
`
