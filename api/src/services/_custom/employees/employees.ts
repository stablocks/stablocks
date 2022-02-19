import type { Prisma } from '@prisma/client'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'
import { users } from 'src/services/users'

export const employees = () => {
  requireAuth({ roles: ['admin', 'employee'] })

  return db.user.findMany({
    where: {
      roles: {
        employee: true,
      },
    },
    orderBy: {
      lastName: 'asc',
    },
  })
}

export const employee = async ({ id }: Prisma.UserWhereUniqueInput) => {
  requireAuth({ roles: ['admin', 'employee'] })

  const user = await db.user.findUnique({
    where: { id },
    include: {
      roles: true,
    },
  })

  if (!user?.roles?.employee) return

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
      roles: {
        create: {
          admin: true,
          employee: true,
          external: false,
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
      roles: {
        create: {
          employee: true,
          external: false,
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
