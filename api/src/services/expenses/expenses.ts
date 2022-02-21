import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'
import { perPage } from 'src/utils/base'

import { db } from 'src/lib/db'

export const expenses = ({ page = 1 }) => {
  const offset = (page - 1) * perPage

  return {
    expenses: db.expense.findMany({
      take: perPage,
      skip: offset,
      orderBy: {
        date: 'desc',
      },
    }),
    count: db.expense.count(),
  }
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

export const updateExpense = async ({ id, input }: UpdateExpenseArgs) => {
  if (input.categorySlug === '') {
    input.category = { disconnect: true }
    delete input.categorySlug
  }

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
