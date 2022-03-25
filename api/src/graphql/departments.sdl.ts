export const schema = gql`
  type Department {
    id: String!
    name: String!
    email: String
    employees: [EmployeeInfo]!
    department: Department
    departmentId: String
    subDepartments: [Department]!
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  type Query {
    departments: [Department!]! @requireAuth
    department(id: String!): Department @requireAuth
  }

  input CreateDepartmentInput {
    name: String!
    email: String
    departmentId: String
  }

  input UpdateDepartmentInput {
    name: String
    email: String
    departmentId: String
  }

  type Mutation {
    createDepartment(input: CreateDepartmentInput!): Department! @requireAuth
    updateDepartment(id: String!, input: UpdateDepartmentInput!): Department!
      @requireAuth
    deleteDepartment(id: String!): Department! @requireAuth
  }
`
