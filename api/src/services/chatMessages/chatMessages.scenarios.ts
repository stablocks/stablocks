import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ChatMessageCreateArgs>({
  chatMessage: {
    one: {
      data: {
        message: 'String',
        updatedAt: '2022-03-23T23:04:24Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String8748581',
            updatedAt: '2022-03-23T23:04:24Z',
          },
        },
        chat: {
          create: {
            updatedAt: '2022-03-23T23:04:24Z',
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String4602210',
                updatedAt: '2022-03-23T23:04:24Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        message: 'String',
        updatedAt: '2022-03-23T23:04:24Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String8500711',
            updatedAt: '2022-03-23T23:04:24Z',
          },
        },
        chat: {
          create: {
            updatedAt: '2022-03-23T23:04:24Z',
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String783313',
                updatedAt: '2022-03-23T23:04:24Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
