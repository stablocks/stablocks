import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const employeePays = () => {
  return db.employeePay.findMany()
}

export const employeePay = ({ id }: Prisma.EmployeePayWhereUniqueInput) => {
  return db.employeePay.findUnique({
    where: { id },
  })
}

interface CreateEmployeePayArgs {
  input: Prisma.EmployeePayCreateInput
}

export const createEmployeePay = ({ input }: CreateEmployeePayArgs) => {
  return db.employeePay.create({
    data: input,
  })
}

interface UpdateEmployeePayArgs extends Prisma.EmployeePayWhereUniqueInput {
  input: Prisma.EmployeePayUpdateInput
}

export const updateEmployeePay = ({ id, input }: UpdateEmployeePayArgs) => {
  return db.employeePay.update({
    data: input,
    where: { id },
  })
}

export const deleteEmployeePay = ({
  id,
}: Prisma.EmployeePayWhereUniqueInput) => {
  return db.employeePay.delete({
    where: { id },
  })
}

export const EmployeePay = {
  employee: (_obj, { root }: ResolverArgs<ReturnType<typeof employeePay>>) =>
    db.employeePay.findUnique({ where: { id: root.id } }).employee(),
}
