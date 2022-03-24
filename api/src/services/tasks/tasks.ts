import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const tasks = () => {
  return db.task.findMany()
}

export const task = ({ id }: Prisma.TaskWhereUniqueInput) => {
  return db.task.findUnique({
    where: { id },
  })
}

interface CreateTaskArgs {
  input: Prisma.TaskCreateInput
}

export const createTask = ({ input }: CreateTaskArgs) => {
  return db.task.create({
    data: input,
  })
}

interface UpdateTaskArgs extends Prisma.TaskWhereUniqueInput {
  input: Prisma.TaskUpdateInput
}

export const updateTask = ({ id, input }: UpdateTaskArgs) => {
  return db.task.update({
    data: input,
    where: { id },
  })
}

export const deleteTask = ({ id }: Prisma.TaskWhereUniqueInput) => {
  return db.task.delete({
    where: { id },
  })
}

export const Task = {
  project: (_obj, { root }: ResolverArgs<ReturnType<typeof task>>) =>
    db.task.findUnique({ where: { id: root.id } }).project(),
  employee: (_obj, { root }: ResolverArgs<ReturnType<typeof task>>) =>
    db.task.findUnique({ where: { id: root.id } }).employee(),
  assignee: (_obj, { root }: ResolverArgs<ReturnType<typeof task>>) =>
    db.task.findUnique({ where: { id: root.id } }).assignee(),
  tickets: (_obj, { root }: ResolverArgs<ReturnType<typeof task>>) =>
    db.task.findUnique({ where: { id: root.id } }).tickets(),
  comments: (_obj, { root }: ResolverArgs<ReturnType<typeof task>>) =>
    db.task.findUnique({ where: { id: root.id } }).comments(),
}
