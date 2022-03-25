import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ExpenseCreateArgs>({
  expense: {
    one: {
      data: {
        name: 'String',
        amount: 174686.35564325209,
        date: '2022-03-23T23:01:37Z',
        updatedAt: '2022-03-23T23:01:37Z',
      },
    },
    two: {
      data: {
        name: 'String',
        amount: 6851505.116662366,
        date: '2022-03-23T23:01:37Z',
        updatedAt: '2022-03-23T23:01:37Z',
      },
    },
  },
})

export type StandardScenario = typeof standard
