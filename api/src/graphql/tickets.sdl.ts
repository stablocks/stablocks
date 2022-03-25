export const schema = gql`
  type Ticket {
    id: Int!
    title: String!
    description: String
    status: Status!
    user: User!
    userId: String!
    assignee: EmployeeInfo
    assigneeId: String
    task: Task
    taskId: String
    comments: [TicketComment]!
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
    tickets: [Ticket!]! @requireAuth
    ticket(id: Int!): Ticket @requireAuth
  }

  input CreateTicketInput {
    title: String!
    description: String
    status: Status
    userId: String!
    assigneeId: String
    taskId: String
  }

  input UpdateTicketInput {
    title: String
    description: String
    status: Status
    userId: String
    assigneeId: String
    taskId: String
  }

  type Mutation {
    createTicket(input: CreateTicketInput!): Ticket! @requireAuth
    updateTicket(id: Int!, input: UpdateTicketInput!): Ticket! @requireAuth
    deleteTicket(id: Int!): Ticket! @requireAuth
  }
`
