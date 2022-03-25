import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const taskComments = () => {
  return db.taskComment.findMany()
}

export const taskComment = ({ id }: Prisma.TaskCommentWhereUniqueInput) => {
  return db.taskComment.findUnique({
    where: { id },
  })
}

interface CreateTaskCommentArgs {
  input: Prisma.TaskCommentCreateInput
}

export const createTaskComment = ({ input }: CreateTaskCommentArgs) => {
  return db.taskComment.create({
    data: input,
  })
}

interface UpdateTaskCommentArgs extends Prisma.TaskCommentWhereUniqueInput {
  input: Prisma.TaskCommentUpdateInput
}

export const updateTaskComment = ({ id, input }: UpdateTaskCommentArgs) => {
  return db.taskComment.update({
    data: input,
    where: { id },
  })
}

export const deleteTaskComment = ({
  id,
}: Prisma.TaskCommentWhereUniqueInput) => {
  return db.taskComment.delete({
    where: { id },
  })
}

export const TaskComment = {
  task: (_obj, { root }: ResolverArgs<ReturnType<typeof taskComment>>) =>
    db.taskComment.findUnique({ where: { id: root.id } }).task(),
  employee: (_obj, { root }: ResolverArgs<ReturnType<typeof taskComment>>) =>
    db.taskComment.findUnique({ where: { id: root.id } }).employee(),
}
