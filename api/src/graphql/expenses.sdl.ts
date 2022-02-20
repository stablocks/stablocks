export const schema = gql`
  type Expense {
    id: String!
    plaidId: String!
    name: String!
    amount: Float!
    date: DateTime!
    authorizedDate: DateTime
    currency: String!
    pending: Boolean!
    category: ExpenseCategory
    categoryId: String
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  type Query {
    expenses: [Expense!]! @requireAuth
    expense(id: String!): Expense @requireAuth
  }

  input CreateExpenseInput {
    plaidId: String!
    name: String!
    amount: Float!
    date: DateTime!
    authorizedDate: DateTime
    currency: String!
    pending: Boolean!
    categoryId: String
  }

  input UpdateExpenseInput {
    plaidId: String
    name: String
    amount: Float
    date: DateTime
    authorizedDate: DateTime
    currency: String
    pending: Boolean
    categoryId: String
  }

  type Mutation {
    createExpense(input: CreateExpenseInput!): Expense! @requireAuth
    updateExpense(id: String!, input: UpdateExpenseInput!): Expense!
      @requireAuth
    deleteExpense(id: String!): Expense! @requireAuth
  }
`
