export const schema = gql`
  type Task {
    id: String!
    title: String!
    description: String
    status: Status!
    project: Project!
    projectId: String!
    user: User!
    userId: String!
    assignee: User
    assigneeId: String
    tickets: [Ticket]!
    comments: [TaskComment]!
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  enum Status {
    open
    pending
    closed
    archived
  }

  type Query {
    tasks: [Task!]! @requireAuth
    task(id: String!): Task @requireAuth
  }

  input CreateTaskInput {
    title: String!
    description: String
    status: Status!
    projectId: String!
    userId: String!
    assigneeId: String
  }

  input UpdateTaskInput {
    title: String
    description: String
    status: Status
    projectId: String
    userId: String
    assigneeId: String
  }

  type Mutation {
    createTask(input: CreateTaskInput!): Task! @requireAuth
    updateTask(id: String!, input: UpdateTaskInput!): Task! @requireAuth
    deleteTask(id: String!): Task! @requireAuth
  }
`
