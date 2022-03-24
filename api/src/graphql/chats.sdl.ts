export const schema = gql`
  type Chat {
    id: String!
    user: User!
    userId: String!
    assignee: EmployeeInfo
    assigneeId: String
    messages: [ChatMessage]!
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  type Query {
    chats: [Chat!]! @requireAuth
    chat(id: String!): Chat @requireAuth
  }

  input CreateChatInput {
    userId: String!
    assigneeId: String
  }

  input UpdateChatInput {
    userId: String
    assigneeId: String
  }

  type Mutation {
    createChat(input: CreateChatInput!): Chat! @requireAuth
    updateChat(id: String!, input: UpdateChatInput!): Chat! @requireAuth
    deleteChat(id: String!): Chat! @requireAuth
  }
`
