import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ExpenseCreateArgs>({
  expense: {
    one: {
      data: {
        name: 'String',
        amount: 3864927.096576982,
        date: '2022-02-21T02:09:57Z',
        updatedAt: '2022-02-21T02:09:57Z',
      },
    },
    two: {
      data: {
        name: 'String',
        amount: 8232404.57616518,
        date: '2022-02-21T02:09:57Z',
        updatedAt: '2022-02-21T02:09:57Z',
      },
    },
  },
})

export type StandardScenario = typeof standard
