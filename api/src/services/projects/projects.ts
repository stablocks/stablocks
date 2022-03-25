import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const projects = () => {
  return db.project.findMany()
}

export const project = ({ id }: Prisma.ProjectWhereUniqueInput) => {
  return db.project.findUnique({
    where: { id },
  })
}

interface CreateProjectArgs {
  input: Prisma.ProjectCreateInput
}

export const createProject = ({ input }: CreateProjectArgs) => {
  return db.project.create({
    data: input,
  })
}

interface UpdateProjectArgs extends Prisma.ProjectWhereUniqueInput {
  input: Prisma.ProjectUpdateInput
}

export const updateProject = ({ id, input }: UpdateProjectArgs) => {
  return db.project.update({
    data: input,
    where: { id },
  })
}

export const deleteProject = ({ id }: Prisma.ProjectWhereUniqueInput) => {
  return db.project.delete({
    where: { id },
  })
}

export const Project = {
  tasks: (_obj, { root }: ResolverArgs<ReturnType<typeof project>>) =>
    db.project.findUnique({ where: { id: root.id } }).tasks(),
  employee: (_obj, { root }: ResolverArgs<ReturnType<typeof project>>) =>
    db.project.findUnique({ where: { id: root.id } }).employee(),
}
