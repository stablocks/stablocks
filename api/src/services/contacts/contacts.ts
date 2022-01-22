import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const contacts = () => {
  return db.contact.findMany()
}

export const contact = ({ id }: Prisma.ContactWhereUniqueInput) => {
  return db.contact.findUnique({
    where: { id },
  })
}

interface CreateContactArgs {
  input: Prisma.ContactCreateInput
}

export const createContact = ({ input }: CreateContactArgs) => {
  return db.contact.create({
    data: input,
  })
}

interface UpdateContactArgs extends Prisma.ContactWhereUniqueInput {
  input: Prisma.ContactUpdateInput
}

export const updateContact = ({ id, input }: UpdateContactArgs) => {
  return db.contact.update({
    data: input,
    where: { id },
  })
}

export const deleteContact = ({ id }: Prisma.ContactWhereUniqueInput) => {
  return db.contact.delete({
    where: { id },
  })
}

export const Contact = {
  company: (_obj, { root }: ResolverArgs<ReturnType<typeof contact>>) =>
    db.contact.findUnique({ where: { id: root.id } }).company(),
  user: (_obj, { root }: ResolverArgs<ReturnType<typeof contact>>) =>
    db.contact.findUnique({ where: { id: root.id } }).user(),
  notes: (_obj, { root }: ResolverArgs<ReturnType<typeof contact>>) =>
    db.contact.findUnique({ where: { id: root.id } }).notes(),
  invoices: (_obj, { root }: ResolverArgs<ReturnType<typeof contact>>) =>
    db.contact.findUnique({ where: { id: root.id } }).invoices(),
}
