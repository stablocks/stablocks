export const schema = gql`
  type Expense {
    id: String!
    name: String!
    amount: Float!
    date: DateTime!
    authorizedDate: DateTime
    currency: String!
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
    name: String!
    amount: Float!
    date: DateTime!
    authorizedDate: DateTime
    currency: String!
    categoryId: String
  }

  input UpdateExpenseInput {
    name: String
    amount: Float
    date: DateTime
    authorizedDate: DateTime
    currency: String
    categoryId: String
  }

  type Mutation {
    createExpense(input: CreateExpenseInput!): Expense! @requireAuth
    updateExpense(id: String!, input: UpdateExpenseInput!): Expense!
      @requireAuth
    deleteExpense(id: String!): Expense! @requireAuth
  }
`
