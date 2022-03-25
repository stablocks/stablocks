import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const addresses = () => {
  return db.address.findMany()
}

export const address = ({ id }: Prisma.AddressWhereUniqueInput) => {
  return db.address.findUnique({
    where: { id },
  })
}

interface CreateAddressArgs {
  input: Prisma.AddressCreateInput
}

export const createAddress = ({ input }: CreateAddressArgs) => {
  return db.address.create({
    data: input,
  })
}

interface UpdateAddressArgs extends Prisma.AddressWhereUniqueInput {
  input: Prisma.AddressUpdateInput
}

export const updateAddress = ({ id, input }: UpdateAddressArgs) => {
  return db.address.update({
    data: input,
    where: { id },
  })
}

export const deleteAddress = ({ id }: Prisma.AddressWhereUniqueInput) => {
  return db.address.delete({
    where: { id },
  })
}

export const Address = {
  organization: (_obj, { root }: ResolverArgs<ReturnType<typeof address>>) =>
    db.address.findUnique({ where: { id: root.id } }).organization(),
  employee: (_obj, { root }: ResolverArgs<ReturnType<typeof address>>) =>
    db.address.findUnique({ where: { id: root.id } }).employee(),
  contact: (_obj, { root }: ResolverArgs<ReturnType<typeof address>>) =>
    db.address.findUnique({ where: { id: root.id } }).contact(),
  company: (_obj, { root }: ResolverArgs<ReturnType<typeof address>>) =>
    db.address.findUnique({ where: { id: root.id } }).company(),
}
