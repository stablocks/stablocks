import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.EmployeeInfoCreateArgs>({
  employeeInfo: {
    one: {
      data: {
        updatedAt: '2022-03-23T23:59:18Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String9724458',
            updatedAt: '2022-03-23T23:59:18Z',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2022-03-23T23:59:18Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String8161439',
            updatedAt: '2022-03-23T23:59:18Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
