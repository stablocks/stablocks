import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ExpenseCreateArgs>({
  expense: {
    one: {
      data: {
        plaidId: 'String1162442',
        name: 'String',
        amount: 9550589.983424686,
        date: '2022-02-20T13:05:20Z',
        updatedAt: '2022-02-20T13:05:20Z',
      },
    },
    two: {
      data: {
        plaidId: 'String3250752',
        name: 'String',
        amount: 9570594.740971288,
        date: '2022-02-20T13:05:20Z',
        updatedAt: '2022-02-20T13:05:20Z',
      },
    },
  },
})

export type StandardScenario = typeof standard
