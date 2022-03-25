import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const contactNotes = () => {
  return db.contactNote.findMany()
}

export const contactNote = ({ id }: Prisma.ContactNoteWhereUniqueInput) => {
  return db.contactNote.findUnique({
    where: { id },
  })
}

interface CreateContactNoteArgs {
  input: Prisma.ContactNoteCreateInput
}

export const createContactNote = ({ input }: CreateContactNoteArgs) => {
  return db.contactNote.create({
    data: input,
  })
}

interface UpdateContactNoteArgs extends Prisma.ContactNoteWhereUniqueInput {
  input: Prisma.ContactNoteUpdateInput
}

export const updateContactNote = ({ id, input }: UpdateContactNoteArgs) => {
  return db.contactNote.update({
    data: input,
    where: { id },
  })
}

export const deleteContactNote = ({
  id,
}: Prisma.ContactNoteWhereUniqueInput) => {
  return db.contactNote.delete({
    where: { id },
  })
}

export const ContactNote = {
  contact: (_obj, { root }: ResolverArgs<ReturnType<typeof contactNote>>) =>
    db.contactNote.findUnique({ where: { id: root.id } }).contact(),
  employee: (_obj, { root }: ResolverArgs<ReturnType<typeof contactNote>>) =>
    db.contactNote.findUnique({ where: { id: root.id } }).employee(),
}
