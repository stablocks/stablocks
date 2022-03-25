import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.AddressCreateArgs>({
  address: {
    one: {
      data: {
        address: 'String',
        city: 'String',
        state: 'String',
        country: 'String',
        zip: 9085075,
        updatedAt: '2022-03-23T22:59:44Z',
      },
    },
    two: {
      data: {
        address: 'String',
        city: 'String',
        state: 'String',
        country: 'String',
        zip: 3285716,
        updatedAt: '2022-03-23T22:59:44Z',
      },
    },
  },
})

export type StandardScenario = typeof standard
