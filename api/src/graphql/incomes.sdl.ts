export const schema = gql`
  type Income {
    id: String!
    name: String!
    amount: Float!
    date: DateTime!
    currency: String!
    invoice: Invoice
    invoiceId: Int
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  type Query {
    incomes: [Income!]! @requireAuth
    income(id: String!): Income @requireAuth
  }

  input CreateIncomeInput {
    name: String!
    amount: Float!
    date: DateTime!
    currency: String!
    invoiceId: Int
  }

  input UpdateIncomeInput {
    name: String
    amount: Float
    date: DateTime
    currency: String
    invoiceId: Int
  }

  type Mutation {
    createIncome(input: CreateIncomeInput!): Income! @requireAuth
    updateIncome(id: String!, input: UpdateIncomeInput!): Income! @requireAuth
    deleteIncome(id: String!): Income! @requireAuth
  }
`
