import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CompanyCreateArgs>({
  company: {
    one: {
      data: {
        name: 'String',
        updatedAt: '2022-03-23T23:03:10Z',
        employee: {
          create: {
            position: 'String',
            updatedAt: '2022-03-23T23:03:10Z',
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String9003577',
                updatedAt: '2022-03-23T23:03:10Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        updatedAt: '2022-03-23T23:03:10Z',
        employee: {
          create: {
            position: 'String',
            updatedAt: '2022-03-23T23:03:10Z',
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String9518887',
                updatedAt: '2022-03-23T23:03:10Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
