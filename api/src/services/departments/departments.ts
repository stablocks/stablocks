import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const departments = () => {
  return db.department.findMany()
}

export const department = ({ id }: Prisma.DepartmentWhereUniqueInput) => {
  return db.department.findUnique({
    where: { id },
  })
}

interface CreateDepartmentArgs {
  input: Prisma.DepartmentCreateInput
}

export const createDepartment = ({ input }: CreateDepartmentArgs) => {
  return db.department.create({
    data: input,
  })
}

interface UpdateDepartmentArgs extends Prisma.DepartmentWhereUniqueInput {
  input: Prisma.DepartmentUpdateInput
}

export const updateDepartment = ({ id, input }: UpdateDepartmentArgs) => {
  return db.department.update({
    data: input,
    where: { id },
  })
}

export const deleteDepartment = ({ id }: Prisma.DepartmentWhereUniqueInput) => {
  return db.department.delete({
    where: { id },
  })
}

export const Department = {
  employees: (_obj, { root }: ResolverArgs<ReturnType<typeof department>>) =>
    db.department.findUnique({ where: { id: root.id } }).employees(),
  department: (_obj, { root }: ResolverArgs<ReturnType<typeof department>>) =>
    db.department.findUnique({ where: { id: root.id } }).department(),
  subDepartments: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof department>>
  ) => db.department.findUnique({ where: { id: root.id } }).subDepartments(),
}
