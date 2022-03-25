import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ContactNoteCreateArgs>({
  contactNote: {
    one: {
      data: {
        message: 'String',
        updatedAt: '2022-03-23T23:02:57Z',
        contact: { create: { updatedAt: '2022-03-23T23:02:57Z' } },
        employee: {
          create: {
            position: 'String',
            updatedAt: '2022-03-23T23:02:57Z',
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String9251086',
                updatedAt: '2022-03-23T23:02:57Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        message: 'String',
        updatedAt: '2022-03-23T23:02:57Z',
        contact: { create: { updatedAt: '2022-03-23T23:02:57Z' } },
        employee: {
          create: {
            position: 'String',
            updatedAt: '2022-03-23T23:02:57Z',
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String7307128',
                updatedAt: '2022-03-23T23:02:57Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
