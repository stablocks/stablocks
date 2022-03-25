export const schema = gql`
  type Role {
    employee: EmployeeInfo!
    employeeId: String!
    departmentAdmin: Boolean!
    financeAdmin: Boolean!
    finance: Boolean!
    hrAdmin: Boolean!
    recruitingAdmin: Boolean!
    crmAdmin: Boolean!
    marketingAdmin: Boolean!
    marketing: Boolean!
    salesAdmin: Boolean!
    sales: Boolean!
    helpdeskAdmin: Boolean!
    projectsAdmin: Boolean!
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  type Query {
    role(employeeId: String!): Role @requireAuth
  }

  input CreateRoleInput {
    employeeId: String!
    departmentAdmin: Boolean!
    financeAdmin: Boolean!
    finance: Boolean!
    hrAdmin: Boolean!
    recruitingAdmin: Boolean!
    crmAdmin: Boolean!
    marketingAdmin: Boolean!
    marketing: Boolean!
    salesAdmin: Boolean!
    sales: Boolean!
    helpdeskAdmin: Boolean!
    projectsAdmin: Boolean!
  }

  input UpdateRoleInput {
    employeeId: String
    departmentAdmin: Boolean
    financeAdmin: Boolean
    finance: Boolean
    hrAdmin: Boolean
    recruitingAdmin: Boolean
    crmAdmin: Boolean
    marketingAdmin: Boolean
    marketing: Boolean
    salesAdmin: Boolean
    sales: Boolean
    helpdeskAdmin: Boolean
    projectsAdmin: Boolean
  }

  type Mutation {
    createRole(input: CreateRoleInput!): Role! @requireAuth
    updateRole(id: String!, input: UpdateRoleInput!): Role! @requireAuth
    # deleteRole(id: String!): Role! @requireAuth
  }
`
