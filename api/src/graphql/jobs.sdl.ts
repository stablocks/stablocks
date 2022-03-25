export const schema = gql`
  type Job {
    id: String!
    title: String!
    description: String!
    employee: EmployeeInfo! @requireAuth
    employeeId: String! @requireAuth
    applications: [Application]! @requireAuth
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  type Query {
    jobs: [Job!]! @skipAuth
    job(id: String!): Job @requireAuth
  }

  input CreateJobInput {
    title: String!
    description: String!
    employeeId: String!
  }

  input UpdateJobInput {
    title: String
    description: String
    employeeId: String
  }

  type Mutation {
    createJob(input: CreateJobInput!): Job! @requireAuth
    updateJob(id: String!, input: UpdateJobInput!): Job! @requireAuth
    deleteJob(id: String!): Job! @requireAuth
  }
`
