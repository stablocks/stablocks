export const schema = gql`
  type EmployeeInfo {
    user: User!
    userId: String!
    roles: Role
    position: String
    altEmail: String
    address: Address
    addressId: String
    supervisor: EmployeeInfo
    supervisorId: String
    employees: [EmployeeInfo]!
    departments: [Department]!
    pay: EmployeePay
    jobs: [Job]!
    contacts: [Contact]!
    contactNotes: [ContactNote]!
    companies: [Company]!
    ticketsAssigned: [Ticket]!
    chatsAssigned: [Chat]!
    projects: [Project]!
    tasksCreated: [Task]!
    tasksAssigned: [Task]!
    taskComments: [TaskComment]!
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  type Query {
    employeeInfos: [EmployeeInfo!]! @requireAuth
    employeeInfo(id: String!): EmployeeInfo @requireAuth
  }

  input CreateEmployeeInfoInput {
    userId: String!
    position: String
    altEmail: String
    addressId: String
    supervisorId: String
  }

  input UpdateEmployeeInfoInput {
    userId: String
    position: String
    altEmail: String
    addressId: String
    supervisorId: String
  }

  type Mutation {
    createEmployeeInfo(input: CreateEmployeeInfoInput!): EmployeeInfo!
      @requireAuth
    updateEmployeeInfo(
      id: String!
      input: UpdateEmployeeInfoInput!
    ): EmployeeInfo! @requireAuth
    deleteEmployeeInfo(id: String!): EmployeeInfo! @requireAuth
  }
`
