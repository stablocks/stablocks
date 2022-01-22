export const schema = gql`
  type Contact {
    id: String!
    firstName: String
    lastName: String
    email: String
    phone: Int
    company: Company
    companyId: String
    user: User!
    userId: String!
    notes: [ContactNote]!
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  type Query {
    contacts: [Contact!]! @requireAuth
    contact(id: String!): Contact @requireAuth
  }

  input CreateContactInput {
    firstName: String
    lastName: String
    email: String
    phone: Int
    companyId: String
    userId: String!
  }

  input UpdateContactInput {
    firstName: String
    lastName: String
    email: String
    phone: Int
    companyId: String
    userId: String
  }

  type Mutation {
    createContact(input: CreateContactInput!): Contact! @requireAuth
    updateContact(id: String!, input: UpdateContactInput!): Contact!
      @requireAuth
    deleteContact(id: String!): Contact! @requireAuth
  }
`
