import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TicketCommentCreateArgs>({
  ticketComment: {
    one: {
      data: {
        message: 'String',
        updatedAt: '2022-03-23T23:03:51Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String9149548',
            updatedAt: '2022-03-23T23:03:51Z',
          },
        },
        Ticket: {
          create: {
            title: 'String',
            updatedAt: '2022-03-23T23:03:51Z',
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String28868',
                updatedAt: '2022-03-23T23:03:51Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        message: 'String',
        updatedAt: '2022-03-23T23:03:51Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String7274458',
            updatedAt: '2022-03-23T23:03:51Z',
          },
        },
        Ticket: {
          create: {
            title: 'String',
            updatedAt: '2022-03-23T23:03:51Z',
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String5556784',
                updatedAt: '2022-03-23T23:03:51Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
