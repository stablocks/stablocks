import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ContactCreateArgs>({
  contact: {
    one: {
      data: {
        updatedAt: '2022-03-23T23:12:54Z',
        employee: {
          create: {
            position: 'String',
            updatedAt: '2022-03-23T23:12:54Z',
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String8925507',
                updatedAt: '2022-03-23T23:12:54Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2022-03-23T23:12:54Z',
        employee: {
          create: {
            position: 'String',
            updatedAt: '2022-03-23T23:12:54Z',
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String496907',
                updatedAt: '2022-03-23T23:12:54Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
