export const schema = gql`
  type Project {
    id: String!
    title: String!
    description: String
    tasks: [Task]!
    employee: EmployeeInfo!
    employeeId: String!
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  type Query {
    projects: [Project!]! @requireAuth
    project(id: String!): Project @requireAuth
  }

  input CreateProjectInput {
    title: String!
    description: String
    employeeId: String!
  }

  input UpdateProjectInput {
    title: String
    description: String
    employeeId: String
  }

  type Mutation {
    createProject(input: CreateProjectInput!): Project! @requireAuth
    updateProject(id: String!, input: UpdateProjectInput!): Project!
      @requireAuth
    deleteProject(id: String!): Project! @requireAuth
  }
`
