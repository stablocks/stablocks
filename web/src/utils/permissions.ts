import { useAuth } from '@redwoodjs/auth'

export const usePermissions = (
  auths: string | string[] | boolean,
  ownerId?: string | string[]
): boolean => {
  if (typeof auths === 'boolean') return auths

  const { currentUser, isAuthenticated, hasRole } = useAuth()

  if (!isAuthenticated) return false

  if (ownerId) {
    if (typeof ownerId === 'string') {
      if (ownerId === (currentUser.id as string)) return true
    } else {
      if (ownerId.includes(currentUser.id as string)) return true
    }
  }

  return hasRole(auths)
}
