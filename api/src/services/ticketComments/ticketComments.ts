import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const ticketComments = () => {
  return db.ticketComment.findMany({ orderBy: { createdAt: 'asc' } })
}

export const ticketComment = ({ id }: Prisma.TicketCommentWhereUniqueInput) => {
  return db.ticketComment.findUnique({
    where: { id },
  })
}

interface CreateTicketCommentArgs {
  input: Prisma.TicketCommentCreateInput
}

export const createTicketComment = ({ input }: CreateTicketCommentArgs) => {
  return db.ticketComment.create({
    data: input,
  })
}

interface UpdateTicketCommentArgs extends Prisma.TicketCommentWhereUniqueInput {
  input: Prisma.TicketCommentUpdateInput
}

export const updateTicketComment = ({ id, input }: UpdateTicketCommentArgs) => {
  return db.ticketComment.update({
    data: input,
    where: { id },
  })
}

export const deleteTicketComment = ({
  id,
}: Prisma.TicketCommentWhereUniqueInput) => {
  return db.ticketComment.delete({
    where: { id },
  })
}

export const TicketComment = {
  user: (_obj, { root }: ResolverArgs<ReturnType<typeof ticketComment>>) =>
    db.ticketComment.findUnique({ where: { id: root.id } }).user(),
  Ticket: (_obj, { root }: ResolverArgs<ReturnType<typeof ticketComment>>) =>
    db.ticketComment.findUnique({ where: { id: root.id } }).Ticket(),
}
