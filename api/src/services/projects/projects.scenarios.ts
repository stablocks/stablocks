import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ProjectCreateArgs>({
  project: {
    one: {
      data: {
        title: 'String',
        updatedAt: '2022-03-23T23:04:39Z',
        employee: {
          create: {
            position: 'String',
            updatedAt: '2022-03-23T23:04:39Z',
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String3620512',
                updatedAt: '2022-03-23T23:04:39Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        title: 'String',
        updatedAt: '2022-03-23T23:04:39Z',
        employee: {
          create: {
            position: 'String',
            updatedAt: '2022-03-23T23:04:39Z',
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String9896187',
                updatedAt: '2022-03-23T23:04:39Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
