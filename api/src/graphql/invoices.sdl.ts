export const schema = gql`
  type Invoice {
    id: Int!
    status: InvoiceStatus!
    contact: Contact!
    contactId: String!
    currency: String!
    issued: DateTime!
    dueDate: DateTime
    paidDate: DateTime
    description: String
    items: [InvoiceItem]!
    income: Income
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  enum InvoiceStatus {
    draft
    sent
    paid
    archived
  }

  type Query {
    invoices: [Invoice!]! @requireAuth
    invoice(id: Int!): Invoice @requireAuth
  }

  input CreateInvoiceInput {
    status: InvoiceStatus!
    contactId: String!
    currency: String!
    issued: DateTime!
    dueDate: DateTime
    paidDate: DateTime
    description: String
  }

  input UpdateInvoiceInput {
    status: InvoiceStatus
    contactId: String
    currency: String
    issued: DateTime
    dueDate: DateTime
    paidDate: DateTime
    description: String
  }

  type Mutation {
    createInvoice(input: CreateInvoiceInput!): Invoice! @requireAuth
    updateInvoice(id: Int!, input: UpdateInvoiceInput!): Invoice! @requireAuth
    deleteInvoice(id: Int!): Invoice! @requireAuth
  }
`
