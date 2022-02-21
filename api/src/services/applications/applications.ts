import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const applications = () => {
  return db.application.findMany({ orderBy: { createdAt: 'desc' } })
}

export const application = ({ id }: Prisma.ApplicationWhereUniqueInput) => {
  return db.application.findUnique({
    where: { id },
  })
}

interface CreateApplicationArgs {
  input: Prisma.ApplicationCreateInput
}

export const createApplication = ({ input }: CreateApplicationArgs) => {
  return db.application.create({
    data: input,
  })
}

interface UpdateApplicationArgs extends Prisma.ApplicationWhereUniqueInput {
  input: Prisma.ApplicationUpdateInput
}

export const updateApplication = ({ id, input }: UpdateApplicationArgs) => {
  return db.application.update({
    data: input,
    where: { id },
  })
}

export const deleteApplication = ({
  id,
}: Prisma.ApplicationWhereUniqueInput) => {
  return db.application.delete({
    where: { id },
  })
}

export const Application = {
  job: (_obj, { root }: ResolverArgs<ReturnType<typeof application>>) =>
    db.application.findUnique({ where: { id: root.id } }).job(),
  user: (_obj, { root }: ResolverArgs<ReturnType<typeof application>>) =>
    db.application.findUnique({ where: { id: root.id } }).user(),
}
