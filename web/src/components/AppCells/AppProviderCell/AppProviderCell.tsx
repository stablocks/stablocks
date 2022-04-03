import { Redirect, routes, useLocation } from '@redwoodjs/router'

import type { FindAppProviderQuery } from 'types/graphql'
import type { CellSuccessProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindAppProviderQuery {
    appProvider {
      organization {
        name
        recruiting
        crm
        marketing
        sales
        finance
        hr
        helpdesk
        projects
      }
      userCount
    }
  }
`

export const Loading = () => <></>

export const Empty = ({ children }) => <>{children}</>

export interface SearchItem {
  label: string
  type: string
}

interface AppContextValue {
  organization?: {
    name: string
    recruiting: boolean
    crm: boolean
    marketing: boolean
    sales: boolean
    finance: boolean
    hr: boolean
    helpdesk: boolean
    projects: boolean
  }
  userCount: number
  search?: SearchItem
  setSearch: React.Dispatch<React.SetStateAction<SearchItem | undefined>>
}

interface AppProviderSuccessProps
  extends CellSuccessProps<FindAppProviderQuery> {
  children?: React.ReactNode
}

export const AppContext = React.createContext<AppContextValue>({
  userCount: 0,
  setSearch: () => {},
})

export const Success = ({ appProvider, children }: AppProviderSuccessProps) => {
  const { organization, userCount } = appProvider
  const { pathname } = useLocation()
  const [search, setSearch] = React.useState<SearchItem | undefined>(undefined)

  const value = {
    organization,
    userCount,
    search,
    setSearch,
  }

  if ((!organization || !userCount) && pathname !== '/setup') {
    return <Redirect to={routes.setup()} />
  }

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

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
