import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const invoices = () => {
  return db.invoice.findMany({ orderBy: { id: 'desc' } })
}

export const invoice = ({ id }: Prisma.InvoiceWhereUniqueInput) => {
  return db.invoice.findUnique({
    where: { id },
  })
}

interface CreateInvoiceArgs {
  input: Prisma.InvoiceCreateInput
}

export const createInvoice = ({ input }: CreateInvoiceArgs) => {
  return db.invoice.create({
    data: input,
  })
}

interface UpdateInvoiceArgs extends Prisma.InvoiceWhereUniqueInput {
  input: Prisma.InvoiceUpdateInput
}

export const updateInvoice = ({ id, input }: UpdateInvoiceArgs) => {
  return db.invoice.update({
    data: input,
    where: { id },
  })
}

export const deleteInvoice = ({ id }: Prisma.InvoiceWhereUniqueInput) => {
  return db.invoice.delete({
    where: { id },
  })
}

export const Invoice = {
  contact: (_obj, { root }: ResolverArgs<ReturnType<typeof invoice>>) =>
    db.invoice.findUnique({ where: { id: root.id } }).contact(),
  items: (_obj, { root }: ResolverArgs<ReturnType<typeof invoice>>) =>
    db.invoice.findUnique({ where: { id: root.id } }).items(),
  income: (_obj, { root }: ResolverArgs<ReturnType<typeof invoice>>) =>
    db.invoice.findUnique({ where: { id: root.id } }).income(),
}
