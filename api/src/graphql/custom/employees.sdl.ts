export const schema = gql`
  type Query {
    employees: [User!]! @requireAuth
    employee(id: String!): User! @requireAuth
  }

  input CreateFirstUserInput {
    firstName: String!
    lastName: String!
    email: String!
  }

  input CreateEmployeeInput {
    firstName: String!
    middleName: String
    lastName: String!
    email: String!
    profileImage: String
    position: String
    supervisorId: String
    resume: String
  }

  input UpdateEmployeeInput {
    firstName: String
    middleName: String
    lastName: String
    email: String
    profileImage: String
    position: String
    supervisorId: String
    resume: String
  }

  type Mutation {
    createFirstUser(input: CreateFirstUserInput!): User! @skipAuth
    createEmployee(input: CreateEmployeeInput!): User! @requireAuth
    updateEmployee(id: String!, input: UpdateEmployeeInput!): User! @requireAuth
  }
`
