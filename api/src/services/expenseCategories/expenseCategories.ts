import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const expenseCategories = () => {
  return db.expenseCategory.findMany({ orderBy: { name: 'asc' } })
}

export const expenseCategory = ({
  id,
}: Prisma.ExpenseCategoryWhereUniqueInput) => {
  return db.expenseCategory.findUnique({
    where: { id },
  })
}

interface CreateExpenseCategoryArgs {
  input: Prisma.ExpenseCategoryCreateInput
}

export const createExpenseCategory = ({ input }: CreateExpenseCategoryArgs) => {
  return db.expenseCategory.create({
    data: input,
  })
}

interface UpdateExpenseCategoryArgs
  extends Prisma.ExpenseCategoryWhereUniqueInput {
  input: Prisma.ExpenseCategoryUpdateInput
}

export const updateExpenseCategory = ({
  id,
  input,
}: UpdateExpenseCategoryArgs) => {
  return db.expenseCategory.update({
    data: input,
    where: { id },
  })
}

export const deleteExpenseCategory = ({
  id,
}: Prisma.ExpenseCategoryWhereUniqueInput) => {
  return db.expenseCategory.delete({
    where: { id },
  })
}

export const ExpenseCategory = {
  expenses: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof expenseCategory>>
  ) => db.expenseCategory.findUnique({ where: { id: root.id } }).expenses(),
}
