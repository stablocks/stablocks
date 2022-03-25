export const schema = gql`
  type EmployeePay {
    id: String!
    amount: Float!
    currency: String!
    type: EmployeePayType!
    frequency: Frequency!
    employee: EmployeeInfo!
    employeeId: String!
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  enum EmployeePayType {
    salary
    hourly
    contract
  }
  enum Frequency {
    daily
    weekly
    biweekly
    monthly
    bimonthly
    annually
  }

  type Query {
    employeePays: [EmployeePay!]! @requireAuth
    employeePay(id: String!): EmployeePay @requireAuth
  }

  input CreateEmployeePayInput {
    amount: Float!
    currency: String!
    type: EmployeePayType!
    frequency: Frequency!
    employeeId: String!
  }

  input UpdateEmployeePayInput {
    amount: Float
    currency: String
    type: EmployeePayType
    frequency: Frequency
    employeeId: String
  }

  type Mutation {
    createEmployeePay(input: CreateEmployeePayInput!): EmployeePay! @requireAuth
    updateEmployeePay(
      id: String!
      input: UpdateEmployeePayInput!
    ): EmployeePay! @requireAuth
    deleteEmployeePay(id: String!): EmployeePay! @requireAuth
  }
`
