import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        firstName: 'String',
        lastName: 'String',
        email: 'String9617729',
        updatedAt: '2022-03-23T23:00:26Z',
      },
    },
    two: {
      data: {
        firstName: 'String',
        lastName: 'String',
        email: 'String104527',
        updatedAt: '2022-03-23T23:00:26Z',
      },
    },
  },
})

export type StandardScenario = typeof standard
