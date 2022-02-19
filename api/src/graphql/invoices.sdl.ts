export const schema = gql`
  type Invoice {
    id: Int!
    contact: Contact!
    contactId: String!
    currency: String!
    issued: DateTime!
    dueDate: DateTime!
    sent: Boolean!
    paid: Boolean!
    description: String
    items: [InvoiceItem]!
    income: Income
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  type Query {
    invoices: [Invoice!]! @requireAuth
    invoice(id: Int!): Invoice @requireAuth
  }

  input CreateInvoiceInput {
    contactId: String!
    currency: String!
    issued: DateTime!
    dueDate: DateTime!
    sent: Boolean!
    paid: Boolean!
    description: String
  }

  input UpdateInvoiceInput {
    contactId: String
    currency: String
    issued: DateTime
    dueDate: DateTime
    sent: Boolean
    paid: Boolean
    description: String
  }

  type Mutation {
    createInvoice(input: CreateInvoiceInput!): Invoice! @requireAuth
    updateInvoice(id: Int!, input: UpdateInvoiceInput!): Invoice! @requireAuth
    deleteInvoice(id: Int!): Invoice! @requireAuth
  }
`
