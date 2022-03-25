import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.InvoiceCreateArgs>({
  invoice: {
    one: {
      data: {
        updatedAt: '2022-03-23T23:24:49Z',
        contact: {
          create: {
            updatedAt: '2022-03-23T23:24:49Z',
            employee: {
              create: {
                position: 'String',
                updatedAt: '2022-03-23T23:24:49Z',
                user: {
                  create: {
                    firstName: 'String',
                    lastName: 'String',
                    email: 'String9353191',
                    updatedAt: '2022-03-23T23:24:49Z',
                  },
                },
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2022-03-23T23:24:49Z',
        contact: {
          create: {
            updatedAt: '2022-03-23T23:24:49Z',
            employee: {
              create: {
                position: 'String',
                updatedAt: '2022-03-23T23:24:49Z',
                user: {
                  create: {
                    firstName: 'String',
                    lastName: 'String',
                    email: 'String7532727',
                    updatedAt: '2022-03-23T23:24:49Z',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
