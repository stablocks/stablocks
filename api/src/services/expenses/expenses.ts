import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const expenses = () => {
  return db.expense.findMany({
    orderBy: {
      date: 'desc',
    },
  })
}

export const expense = ({ id }: Prisma.ExpenseWhereUniqueInput) => {
  return db.expense.findUnique({
    where: { id },
  })
}

interface CreateExpenseArgs {
  input: Prisma.ExpenseCreateInput
}

export const createExpense = ({ input }: CreateExpenseArgs) => {
  return db.expense.create({
    data: input,
  })
}

interface UpdateExpenseArgs extends Prisma.ExpenseWhereUniqueInput {
  input: Prisma.ExpenseUpdateInput
}

export const updateExpense = ({ id, input }: UpdateExpenseArgs) => {
  return db.expense.update({
    data: input,
    where: { id },
  })
}

export const deleteExpense = ({ id }: Prisma.ExpenseWhereUniqueInput) => {
  return db.expense.delete({
    where: { id },
  })
}

export const Expense = {
  category: (_obj, { root }: ResolverArgs<ReturnType<typeof expense>>) =>
    db.expense.findUnique({ where: { id: root.id } }).category(),
}
