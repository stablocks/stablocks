export const schema = gql`
  type ExpenseCategory {
    id: String!
    name: String!
    default: Boolean!
    expenses: [Expense]!
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  type Query {
    expenseCategories: [ExpenseCategory!]! @requireAuth
    expenseCategory(id: String!): ExpenseCategory @requireAuth
  }

  input CreateExpenseCategoryInput {
    name: String!
    default: Boolean!
  }

  input UpdateExpenseCategoryInput {
    name: String
    default: Boolean
  }

  type Mutation {
    createExpenseCategory(input: CreateExpenseCategoryInput!): ExpenseCategory!
      @requireAuth
    updateExpenseCategory(
      id: String!
      input: UpdateExpenseCategoryInput!
    ): ExpenseCategory! @requireAuth
    deleteExpenseCategory(id: String!): ExpenseCategory! @requireAuth
  }
`
