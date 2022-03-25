import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.RoleCreateArgs>({
  role: {
    one: {
      data: {
        updatedAt: '2022-03-23T23:05:12Z',
        employee: {
          create: {
            position: 'String',
            updatedAt: '2022-03-23T23:05:12Z',
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String5056354',
                updatedAt: '2022-03-23T23:05:12Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2022-03-23T23:05:12Z',
        employee: {
          create: {
            position: 'String',
            updatedAt: '2022-03-23T23:05:12Z',
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String1187947',
                updatedAt: '2022-03-23T23:05:12Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
