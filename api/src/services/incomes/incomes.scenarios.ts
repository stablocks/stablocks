import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.IncomeCreateArgs>({
  income: {
    one: {
      data: {
        name: 'String',
        amount: 6223702.220977705,
        date: '2022-02-20T13:04:47Z',
        currency: 'String',
        updatedAt: '2022-02-20T13:04:47Z',
      },
    },
    two: {
      data: {
        name: 'String',
        amount: 5469636.750252794,
        date: '2022-02-20T13:04:47Z',
        currency: 'String',
        updatedAt: '2022-02-20T13:04:47Z',
      },
    },
  },
})

export type StandardScenario = typeof standard
