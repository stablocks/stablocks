import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

export const availableSupervisors = ({ userId }: { userId: string }) => {
  requireAuth({ roles: ['admin', 'hrAdmin', 'hr'] })

  return db.user.findMany({
    where: {
      roles: {
        employee: true,
      },
      id: {
        not: userId,
      },
    },
    orderBy: {
      lastName: 'asc',
    },
  })
}
