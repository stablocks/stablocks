import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const employeeInfos = () => {
  return db.employeeInfo.findMany()
}

export const employeeInfo = ({
  userId,
}: Prisma.EmployeeInfoWhereUniqueInput) => {
  return db.employeeInfo.findUnique({
    where: { userId },
  })
}

interface CreateEmployeeInfoArgs {
  input: Prisma.EmployeeInfoCreateInput
}

export const createEmployeeInfo = ({ input }: CreateEmployeeInfoArgs) => {
  return db.employeeInfo.create({
    data: input,
  })
}

interface UpdateEmployeeInfoArgs extends Prisma.EmployeeInfoWhereUniqueInput {
  input: Prisma.EmployeeInfoUpdateInput
}

export const updateEmployeeInfo = ({
  userId,
  input,
}: UpdateEmployeeInfoArgs) => {
  return db.employeeInfo.update({
    data: input,
    where: { userId },
  })
}

export const deleteEmployeeInfo = ({
  userId,
}: Prisma.EmployeeInfoWhereUniqueInput) => {
  return db.employeeInfo.delete({
    where: { userId },
  })
}

export const EmployeeInfo = {
  user: (_obj, { root }: ResolverArgs<ReturnType<typeof employeeInfo>>) =>
    db.employeeInfo.findUnique({ where: { userId: root.userId } }).user(),
  roles: (_obj, { root }: ResolverArgs<ReturnType<typeof employeeInfo>>) =>
    db.employeeInfo.findUnique({ where: { userId: root.userId } }).roles(),
  address: (_obj, { root }: ResolverArgs<ReturnType<typeof employeeInfo>>) =>
    db.employeeInfo.findUnique({ where: { userId: root.userId } }).address(),
  supervisor: (_obj, { root }: ResolverArgs<ReturnType<typeof employeeInfo>>) =>
    db.employeeInfo.findUnique({ where: { userId: root.userId } }).supervisor(),
  employees: (_obj, { root }: ResolverArgs<ReturnType<typeof employeeInfo>>) =>
    db.employeeInfo.findUnique({ where: { userId: root.userId } }).employees(),
  departments: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof employeeInfo>>
  ) =>
    db.employeeInfo
      .findUnique({ where: { userId: root.userId } })
      .departments(),
  pay: (_obj, { root }: ResolverArgs<ReturnType<typeof employeeInfo>>) =>
    db.employeeInfo.findUnique({ where: { userId: root.userId } }).pay(),
  jobs: (_obj, { root }: ResolverArgs<ReturnType<typeof employeeInfo>>) =>
    db.employeeInfo.findUnique({ where: { userId: root.userId } }).jobs(),
  contacts: (_obj, { root }: ResolverArgs<ReturnType<typeof employeeInfo>>) =>
    db.employeeInfo.findUnique({ where: { userId: root.userId } }).contacts(),
  contactNotes: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof employeeInfo>>
  ) =>
    db.employeeInfo
      .findUnique({ where: { userId: root.userId } })
      .contactNotes(),
  companies: (_obj, { root }: ResolverArgs<ReturnType<typeof employeeInfo>>) =>
    db.employeeInfo.findUnique({ where: { userId: root.userId } }).companies(),
  ticketsAssigned: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof employeeInfo>>
  ) =>
    db.employeeInfo
      .findUnique({ where: { userId: root.userId } })
      .ticketsAssigned(),
  chatsAssigned: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof employeeInfo>>
  ) =>
    db.employeeInfo
      .findUnique({ where: { userId: root.userId } })
      .chatsAssigned(),
  projects: (_obj, { root }: ResolverArgs<ReturnType<typeof employeeInfo>>) =>
    db.employeeInfo.findUnique({ where: { userId: root.userId } }).projects(),
  tasksCreated: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof employeeInfo>>
  ) =>
    db.employeeInfo
      .findUnique({ where: { userId: root.userId } })
      .tasksCreated(),
  tasksAssigned: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof employeeInfo>>
  ) =>
    db.employeeInfo
      .findUnique({ where: { userId: root.userId } })
      .tasksAssigned(),
  taskComments: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof employeeInfo>>
  ) =>
    db.employeeInfo
      .findUnique({ where: { userId: root.userId } })
      .taskComments(),
}
