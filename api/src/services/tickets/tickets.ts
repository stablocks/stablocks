import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const tickets = () => {
  return db.ticket.findMany({ orderBy: { id: 'desc' } })
}

export const ticket = ({ id }: Prisma.TicketWhereUniqueInput) => {
  return db.ticket.findUnique({
    where: { id },
  })
}

interface CreateTicketArgs {
  input: Prisma.TicketCreateInput
}

export const createTicket = ({ input }: CreateTicketArgs) => {
  return db.ticket.create({
    data: input,
  })
}

interface UpdateTicketArgs extends Prisma.TicketWhereUniqueInput {
  input: Prisma.TicketUpdateInput
}

export const updateTicket = ({ id, input }: UpdateTicketArgs) => {
  return db.ticket.update({
    data: input,
    where: { id },
  })
}

export const deleteTicket = ({ id }: Prisma.TicketWhereUniqueInput) => {
  return db.ticket.delete({
    where: { id },
  })
}

export const Ticket = {
  user: (_obj, { root }: ResolverArgs<ReturnType<typeof ticket>>) =>
    db.ticket.findUnique({ where: { id: root.id } }).user(),
  assignee: (_obj, { root }: ResolverArgs<ReturnType<typeof ticket>>) =>
    db.ticket.findUnique({ where: { id: root.id } }).assignee(),
  task: (_obj, { root }: ResolverArgs<ReturnType<typeof ticket>>) =>
    db.ticket.findUnique({ where: { id: root.id } }).task(),
  comments: (_obj, { root }: ResolverArgs<ReturnType<typeof ticket>>) =>
    db.ticket.findUnique({ where: { id: root.id } }).comments(),
}
