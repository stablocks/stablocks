import type { Prisma } from '@prisma/client'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'
import { users } from 'src/services/users'

export const employees = () => {
  requireAuth({ roles: ['admin', 'employee'] })

  return db.user.findMany({
    where: {
      OR: [
        {
          type: {
            equals: 'admin',
          },
        },
        {
          type: {
            equals: 'employee',
          },
        },
      ],
    },
    orderBy: {
      lastName: 'asc',
    },
  })
}

export const employee = async ({ id }: Prisma.UserWhereUniqueInput) => {
  const roles = ['admin', 'employee']

  requireAuth({ roles })

  const user = await db.user.findUnique({
    where: { id },
  })

  if (!roles.includes(user.type)) return {}

  return user
}

interface CreateUserArgs {
  input: Prisma.UserCreateInput
}

export const createFirstUser = async ({ input }: CreateUserArgs) => {
  const getUsers = await users()

  if (getUsers.length > 0) return

  return db.user.create({
    data: {
      ...input,
      type: 'admin',
      employee: {
        create: {
          roles: {
            create: {},
          },
        },
      },
    },
  })
}

interface CreateEmployeeArgs {
  input: Prisma.UserCreateInput
}

export const createEmployee = async ({ input }: CreateEmployeeArgs) => {
  requireAuth({ roles: ['admin'] })

  return db.user.create({
    data: {
      ...input,
      type: 'employee',
      employee: {
        create: {
          roles: {
            create: {},
          },
        },
      },
    },
  })
}
interface UpdateEmployeeArgs extends Prisma.UserWhereUniqueInput {
  input: Prisma.UserUpdateInput
}

export const updateEmployee = ({ id, input }: UpdateEmployeeArgs) => {
  if (context.currentUser?.id !== id) {
    requireAuth({ roles: ['admin'] })
  }

  return db.user.update({
    data: input,
    where: { id },
  })
}
