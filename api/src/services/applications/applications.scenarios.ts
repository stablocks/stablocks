import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ApplicationCreateArgs>({
  application: {
    one: {
      data: {
        updatedAt: '2022-03-23T23:02:32Z',
        job: {
          create: {
            title: 'String',
            description: 'String',
            updatedAt: '2022-03-23T23:02:32Z',
            employee: {
              create: {
                position: 'String',
                updatedAt: '2022-03-23T23:02:32Z',
                user: {
                  create: {
                    firstName: 'String',
                    lastName: 'String',
                    email: 'String8162559',
                    updatedAt: '2022-03-23T23:02:32Z',
                  },
                },
              },
            },
          },
        },
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String8806563',
            updatedAt: '2022-03-23T23:02:32Z',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2022-03-23T23:02:32Z',
        job: {
          create: {
            title: 'String',
            description: 'String',
            updatedAt: '2022-03-23T23:02:32Z',
            employee: {
              create: {
                position: 'String',
                updatedAt: '2022-03-23T23:02:32Z',
                user: {
                  create: {
                    firstName: 'String',
                    lastName: 'String',
                    email: 'String6783457',
                    updatedAt: '2022-03-23T23:02:32Z',
                  },
                },
              },
            },
          },
        },
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String7374354',
            updatedAt: '2022-03-23T23:02:32Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
