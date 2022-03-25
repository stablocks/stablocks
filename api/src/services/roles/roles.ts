import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

export const role = ({ employeeId }: Prisma.RoleWhereUniqueInput) => {
  requireAuth({ roles: ['admin'] })

  return db.role.findUnique({
    where: { employeeId },
  })
}

interface CreateRoleArgs {
  input: Prisma.RoleCreateInput
}

export const createRole = ({ input }: CreateRoleArgs) => {
  requireAuth({ roles: ['admin'] })

  return db.role.create({
    data: input,
  })
}

interface UpdateRoleArgs extends Prisma.RoleWhereUniqueInput {
  input: Prisma.RoleUpdateInput
}

export const updateRole = ({ employeeId, input }: UpdateRoleArgs) => {
  requireAuth({ roles: ['admin'] })

  return db.role.update({
    data: input,
    where: { employeeId },
  })
}

// export const deleteRole = ({ employeeId }: Prisma.RoleWhereUniqueInput) => {
//   return db.role.delete({
//     where: { employeeId },
//   })
// }

export const Role = {
  employee: (_obj, { root }: ResolverArgs<ReturnType<typeof role>>) =>
    db.role.findUnique({ where: { employeeId: root.employeeId } }).employee(),
}
