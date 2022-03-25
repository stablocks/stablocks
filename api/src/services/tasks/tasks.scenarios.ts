import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TaskCreateArgs>({
  task: {
    one: {
      data: {
        title: 'String',
        updatedAt: '2022-03-23T23:04:50Z',
        project: {
          create: {
            title: 'String',
            updatedAt: '2022-03-23T23:04:50Z',
            employee: {
              create: {
                position: 'String',
                updatedAt: '2022-03-23T23:04:50Z',
                user: {
                  create: {
                    firstName: 'String',
                    lastName: 'String',
                    email: 'String8073474',
                    updatedAt: '2022-03-23T23:04:50Z',
                  },
                },
              },
            },
          },
        },
        employee: {
          create: {
            position: 'String',
            updatedAt: '2022-03-23T23:04:50Z',
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String7791759',
                updatedAt: '2022-03-23T23:04:50Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        title: 'String',
        updatedAt: '2022-03-23T23:04:50Z',
        project: {
          create: {
            title: 'String',
            updatedAt: '2022-03-23T23:04:50Z',
            employee: {
              create: {
                position: 'String',
                updatedAt: '2022-03-23T23:04:50Z',
                user: {
                  create: {
                    firstName: 'String',
                    lastName: 'String',
                    email: 'String4549984',
                    updatedAt: '2022-03-23T23:04:50Z',
                  },
                },
              },
            },
          },
        },
        employee: {
          create: {
            position: 'String',
            updatedAt: '2022-03-23T23:04:50Z',
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String8383076',
                updatedAt: '2022-03-23T23:04:50Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
