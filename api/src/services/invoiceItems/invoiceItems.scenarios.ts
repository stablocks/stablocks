import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.InvoiceItemCreateArgs>({
  invoiceItem: {
    one: {
      data: {
        name: 'String',
        units: 4481647.285977319,
        rate: 8084255,
        updatedAt: '2022-02-20T13:05:08Z',
        invoice: {
          create: {
            dueDate: '2022-02-20T13:05:08Z',
            updatedAt: '2022-02-20T13:05:08Z',
            contact: {
              create: {
                updatedAt: '2022-02-20T13:05:08Z',
                user: {
                  create: {
                    firstName: 'String',
                    lastName: 'String',
                    email: 'String5882210',
                    otherEmails: 'String',
                    updatedAt: '2022-02-20T13:05:08Z',
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
        name: 'String',
        units: 9907218.988833813,
        rate: 1707778,
        updatedAt: '2022-02-20T13:05:08Z',
        invoice: {
          create: {
            dueDate: '2022-02-20T13:05:08Z',
            updatedAt: '2022-02-20T13:05:08Z',
            contact: {
              create: {
                updatedAt: '2022-02-20T13:05:08Z',
                user: {
                  create: {
                    firstName: 'String',
                    lastName: 'String',
                    email: 'String3167025',
                    otherEmails: 'String',
                    updatedAt: '2022-02-20T13:05:08Z',
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
