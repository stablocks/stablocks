export const schema = gql`
  type ContactNote {
    id: String!
    message: String!
    contact: Contact!
    contactId: String!
    employee: EmployeeInfo!
    employeeId: String!
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  type Query {
    contactNotes: [ContactNote!]! @requireAuth
    contactNote(id: String!): ContactNote @requireAuth
  }

  input CreateContactNoteInput {
    message: String!
    contactId: String!
    employeeId: String!
  }

  input UpdateContactNoteInput {
    message: String
    contactId: String
    employeeId: String
  }

  type Mutation {
    createContactNote(input: CreateContactNoteInput!): ContactNote! @requireAuth
    updateContactNote(
      id: String!
      input: UpdateContactNoteInput!
    ): ContactNote! @requireAuth
    deleteContactNote(id: String!): ContactNote! @requireAuth
  }
`
