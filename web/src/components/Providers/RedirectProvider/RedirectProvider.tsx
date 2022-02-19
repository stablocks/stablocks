import { useContext } from 'react'
import { AppContext } from 'src/components/Providers/AppProviderCell'
import { Redirect, routes, useLocation } from '@redwoodjs/router'

interface RedirectProviderProps {
  children: React.ReactNode
}

const RedirectProvider = ({ children }: RedirectProviderProps) => {
  const { organization } = useContext(AppContext)
  const { pathname } = useLocation()

  // Redirect if module off
  if (
    (!organization.recruiting && pathname.startsWith(routes.recruiting())) ||
    (!organization.crm && pathname.startsWith(routes.contacts())) ||
    (!organization.finance && pathname.startsWith(routes.finance())) ||
    (!organization.helpdesk && pathname.startsWith(routes.helpdesk())) ||
    (!organization.projects && pathname.startsWith(routes.projects()))
  ) {
    return <Redirect to={routes.home()} />
  }

  // Finances not configured redirect
  if (
    (!process.env.PLAID_CLIENT_ID || !process.env.PLAID_SECRET) &&
    pathname.startsWith(routes.finance()) &&
    pathname !== routes.finance()
  ) {
    return <Redirect to={routes.finance()} />
  }

  return children
}

export default RedirectProvider
