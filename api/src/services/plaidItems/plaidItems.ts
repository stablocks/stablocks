import type { Prisma } from '@prisma/client'
import { requireAuth } from 'src/lib/auth'

import { db } from 'src/lib/db'

export const plaidItems = () => {
  requireAuth({ roles: ['admin', 'financeAdmin'] })

  return db.plaidItem.findMany()
}

export const plaidItem = ({ id }: Prisma.PlaidItemWhereUniqueInput) => {
  requireAuth({ roles: ['admin', 'financeAdmin'] })

  return db.plaidItem.findUnique({
    where: { id },
  })
}

interface CreatePlaidItemArgs {
  input: Prisma.PlaidItemCreateInput
}

export const createPlaidItem = ({ input }: CreatePlaidItemArgs) => {
  requireAuth({ roles: ['admin', 'financeAdmin'] })

  return db.plaidItem.create({
    data: input,
  })
}

interface UpdatePlaidItemArgs extends Prisma.PlaidItemWhereUniqueInput {
  input: Prisma.PlaidItemUpdateInput
}

export const updatePlaidItem = ({ id, input }: UpdatePlaidItemArgs) => {
  requireAuth({ roles: ['admin', 'financeAdmin'] })

  return db.plaidItem.update({
    data: input,
    where: { id },
  })
}

export const deletePlaidItem = ({ id }: Prisma.PlaidItemWhereUniqueInput) => {
  requireAuth({ roles: ['admin', 'financeAdmin'] })

  return db.plaidItem.delete({
    where: { id },
  })
}
