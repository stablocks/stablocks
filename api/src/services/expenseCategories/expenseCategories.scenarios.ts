import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ExpenseCategoryCreateArgs>({
  expenseCategory: {
    one: {
      data: {
        name: 'String',
        slug: 'String3295984',
        updatedAt: '2022-02-20T17:21:23Z',
      },
    },
    two: {
      data: {
        name: 'String',
        slug: 'String7359609',
        updatedAt: '2022-02-20T17:21:23Z',
      },
    },
  },
})

export type StandardScenario = typeof standard
