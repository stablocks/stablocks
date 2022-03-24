import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.IncomeCreateArgs>({
  income: {
    one: {
      data: {
        name: 'String',
        amount: 9031357.561873987,
        date: '2022-03-23T23:00:53Z',
        currency: 'String',
        updatedAt: '2022-03-23T23:00:53Z',
      },
    },
    two: {
      data: {
        name: 'String',
        amount: 3720473.3874673466,
        date: '2022-03-23T23:00:53Z',
        currency: 'String',
        updatedAt: '2022-03-23T23:00:53Z',
      },
    },
  },
})

export type StandardScenario = typeof standard
