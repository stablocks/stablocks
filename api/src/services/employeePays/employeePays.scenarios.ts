import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.EmployeePayCreateArgs>({
  employeePay: {
    one: {
      data: {
        amount: 177223.45744376478,
        updatedAt: '2022-03-23T23:02:02Z',
        employee: {
          create: {
            position: 'String',
            updatedAt: '2022-03-23T23:02:02Z',
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String7811125',
                updatedAt: '2022-03-23T23:02:02Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        amount: 5302401.160251218,
        updatedAt: '2022-03-23T23:02:02Z',
        employee: {
          create: {
            position: 'String',
            updatedAt: '2022-03-23T23:02:02Z',
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String1020131',
                updatedAt: '2022-03-23T23:02:02Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
