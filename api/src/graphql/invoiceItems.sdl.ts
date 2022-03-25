export const schema = gql`
  type InvoiceItem {
    id: String!
    name: String!
    units: Int!
    rate: Float!
    description: String
    invoice: Invoice!
    invoiceId: Int!
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  type Query {
    invoiceItems: [InvoiceItem!]! @requireAuth
    invoiceItem(id: String!): InvoiceItem @requireAuth
  }

  input CreateInvoiceItemInput {
    name: String!
    units: Int!
    rate: Float!
    description: String
    invoiceId: Int!
  }

  input UpdateInvoiceItemInput {
    name: String
    units: Int
    rate: Float
    description: String
    invoiceId: Int
  }

  type Mutation {
    createInvoiceItem(input: CreateInvoiceItemInput!): InvoiceItem! @requireAuth
    updateInvoiceItem(
      id: String!
      input: UpdateInvoiceItemInput!
    ): InvoiceItem! @requireAuth
    deleteInvoiceItem(id: String!): InvoiceItem! @requireAuth
  }
`
