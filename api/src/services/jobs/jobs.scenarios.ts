import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.JobCreateArgs>({
  job: {
    one: {
      data: {
        title: 'String',
        description: 'String',
        updatedAt: '2022-03-23T23:02:19Z',
        employee: {
          create: {
            position: 'String',
            updatedAt: '2022-03-23T23:02:19Z',
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String1534179',
                updatedAt: '2022-03-23T23:02:19Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        title: 'String',
        description: 'String',
        updatedAt: '2022-03-23T23:02:19Z',
        employee: {
          create: {
            position: 'String',
            updatedAt: '2022-03-23T23:02:19Z',
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String8781285',
                updatedAt: '2022-03-23T23:02:19Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
