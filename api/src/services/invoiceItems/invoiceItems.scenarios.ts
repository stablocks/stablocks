import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.InvoiceItemCreateArgs>({
  invoiceItem: {
    one: {
      data: {
        name: 'String',
        units: 9162257,
        rate: 9985098.609099163,
        updatedAt: '2022-03-23T23:01:25Z',
        invoice: {
          create: {
            updatedAt: '2022-03-23T23:01:25Z',
            contact: { create: { updatedAt: '2022-03-23T23:01:25Z' } },
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        units: 8301178,
        rate: 943306.2726992758,
        updatedAt: '2022-03-23T23:01:25Z',
        invoice: {
          create: {
            updatedAt: '2022-03-23T23:01:25Z',
            contact: { create: { updatedAt: '2022-03-23T23:01:25Z' } },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
