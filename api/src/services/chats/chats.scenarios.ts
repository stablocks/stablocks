import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ChatCreateArgs>({
  chat: {
    one: {
      data: {
        updatedAt: '2022-03-23T23:04:07Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String9083701',
            updatedAt: '2022-03-23T23:04:07Z',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2022-03-23T23:04:07Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String5735681',
            updatedAt: '2022-03-23T23:04:07Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
