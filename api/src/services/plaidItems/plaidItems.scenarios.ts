import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.PlaidItemCreateArgs>({
  plaidItem: {
    one: {
      data: {
        id: 'String',
        accessToken: 'String2813616',
        itemId: 'String5975867',
      },
    },
    two: {
      data: {
        id: 'String',
        accessToken: 'String4078427',
        itemId: 'String1630840',
      },
    },
  },
})

export type StandardScenario = typeof standard
