import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TaskCommentCreateArgs>({
  taskComment: {
    one: {
      data: {
        message: 'String',
        updatedAt: '2022-03-23T23:05:00Z',
        task: {
          create: {
            title: 'String',
            updatedAt: '2022-03-23T23:05:00Z',
            project: {
              create: {
                title: 'String',
                updatedAt: '2022-03-23T23:05:00Z',
                employee: {
                  create: {
                    position: 'String',
                    updatedAt: '2022-03-23T23:05:00Z',
                    user: {
                      create: {
                        firstName: 'String',
                        lastName: 'String',
                        email: 'String6496934',
                        updatedAt: '2022-03-23T23:05:00Z',
                      },
                    },
                  },
                },
              },
            },
            employee: {
              create: {
                position: 'String',
                updatedAt: '2022-03-23T23:05:00Z',
                user: {
                  create: {
                    firstName: 'String',
                    lastName: 'String',
                    email: 'String5572688',
                    updatedAt: '2022-03-23T23:05:00Z',
                  },
                },
              },
            },
          },
        },
        employee: {
          create: {
            position: 'String',
            updatedAt: '2022-03-23T23:05:00Z',
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String9611180',
                updatedAt: '2022-03-23T23:05:00Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        message: 'String',
        updatedAt: '2022-03-23T23:05:00Z',
        task: {
          create: {
            title: 'String',
            updatedAt: '2022-03-23T23:05:00Z',
            project: {
              create: {
                title: 'String',
                updatedAt: '2022-03-23T23:05:00Z',
                employee: {
                  create: {
                    position: 'String',
                    updatedAt: '2022-03-23T23:05:00Z',
                    user: {
                      create: {
                        firstName: 'String',
                        lastName: 'String',
                        email: 'String7119947',
                        updatedAt: '2022-03-23T23:05:00Z',
                      },
                    },
                  },
                },
              },
            },
            employee: {
              create: {
                position: 'String',
                updatedAt: '2022-03-23T23:05:00Z',
                user: {
                  create: {
                    firstName: 'String',
                    lastName: 'String',
                    email: 'String5489449',
                    updatedAt: '2022-03-23T23:05:00Z',
                  },
                },
              },
            },
          },
        },
        employee: {
          create: {
            position: 'String',
            updatedAt: '2022-03-23T23:05:00Z',
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String2466175',
                updatedAt: '2022-03-23T23:05:00Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
