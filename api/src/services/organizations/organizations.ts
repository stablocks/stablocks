import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const organization = () => {
  return db.organization.findFirst()
}

interface CreateOrganizationArgs {
  input: Prisma.OrganizationCreateInput
}

export const createOrganization = ({ input }: CreateOrganizationArgs) => {
  return db.organization.create({
    data: input,
  })
}

interface UpdateOrganizationArgs extends Prisma.OrganizationWhereUniqueInput {
  input: Prisma.OrganizationUpdateInput
}

export const updateOrganization = async ({ input }: UpdateOrganizationArgs) => {
  const org = await organization()

  return db.organization.update({
    data: input,
    where: { id: org.id },
  })
}

export const deleteOrganization = ({
  id,
}: Prisma.OrganizationWhereUniqueInput) => {
  return db.organization.delete({
    where: { id },
  })
}

export const Organization = {
  address: (_obj, { root }: ResolverArgs<ReturnType<typeof organization>>) =>
    db.organization.findUnique({ where: { id: root.id } }).address(),
}
