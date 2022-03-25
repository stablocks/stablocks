import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TicketCreateArgs>({
  ticket: {
    one: {
      data: {
        title: 'String',
        updatedAt: '2022-03-23T23:03:33Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String9218411',
            updatedAt: '2022-03-23T23:03:33Z',
          },
        },
      },
    },
    two: {
      data: {
        title: 'String',
        updatedAt: '2022-03-23T23:03:33Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String5147770',
            updatedAt: '2022-03-23T23:03:33Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
