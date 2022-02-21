import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const companies = () => {
  return db.company.findMany({ orderBy: { name: 'asc' } })
}

export const company = ({ id }: Prisma.CompanyWhereUniqueInput) => {
  return db.company.findUnique({
    where: { id },
  })
}

interface CreateCompanyArgs {
  input: Prisma.CompanyCreateInput
}

export const createCompany = ({ input }: CreateCompanyArgs) => {
  return db.company.create({
    data: input,
  })
}

interface UpdateCompanyArgs extends Prisma.CompanyWhereUniqueInput {
  input: Prisma.CompanyUpdateInput
}

export const updateCompany = ({ id, input }: UpdateCompanyArgs) => {
  return db.company.update({
    data: input,
    where: { id },
  })
}

export const deleteCompany = ({ id }: Prisma.CompanyWhereUniqueInput) => {
  return db.company.delete({
    where: { id },
  })
}

export const Company = {
  contacts: (_obj, { root }: ResolverArgs<ReturnType<typeof company>>) =>
    db.company.findUnique({ where: { id: root.id } }).contacts(),
  user: (_obj, { root }: ResolverArgs<ReturnType<typeof company>>) =>
    db.company.findUnique({ where: { id: root.id } }).user(),
}
