import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const incomes = () => {
  return db.income.findMany({ orderBy: { createdAt: 'desc' } })
}

export const income = ({ id }: Prisma.IncomeWhereUniqueInput) => {
  return db.income.findUnique({
    where: { id },
  })
}

interface CreateIncomeArgs {
  input: Prisma.IncomeCreateInput
}

export const createIncome = ({ input }: CreateIncomeArgs) => {
  return db.income.create({
    data: input,
  })
}

interface UpdateIncomeArgs extends Prisma.IncomeWhereUniqueInput {
  input: Prisma.IncomeUpdateInput
}

export const updateIncome = ({ id, input }: UpdateIncomeArgs) => {
  return db.income.update({
    data: input,
    where: { id },
  })
}

export const deleteIncome = ({ id }: Prisma.IncomeWhereUniqueInput) => {
  return db.income.delete({
    where: { id },
  })
}

export const Income = {
  invoice: (_obj, { root }: ResolverArgs<ReturnType<typeof income>>) =>
    db.income.findUnique({ where: { id: root.id } }).invoice(),
}
