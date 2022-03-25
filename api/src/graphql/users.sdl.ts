export const schema = gql`
  type User {
    id: String!
    type: UserType!
    firstName: String!
    middleName: String
    lastName: String!
    email: String!
    profileImage: String
    employee: EmployeeInfo
    applications: [Application]!
    resume: String
    ticketsCreated: [Ticket]!
    ticketComments: [TicketComment]!
    chatsCreated: [Chat]!
    chatMessages: [ChatMessage]!
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  enum UserType {
    admin
    employee
    external
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: String!): User @requireAuth
  }

  input CreateUserInput {
    type: UserType!
    firstName: String!
    middleName: String
    lastName: String!
    email: String!
    profileImage: String
    resume: String
  }

  input UpdateUserInput {
    type: UserType
    firstName: String
    middleName: String
    lastName: String
    email: String
    profileImage: String
    resume: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: String!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: String!): User! @requireAuth
  }
`
