import { Dispatch, createContext, useState } from 'react'
import { Redirect, routes, useLocation } from '@redwoodjs/router'

import type { FindAppProviderQuery } from 'types/graphql'
import type { CellSuccessProps } from '@redwoodjs/web'
import { SetStateAction } from '@redwoodjs/testing/node_modules/@types/react'

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
  setSearch: Dispatch<SetStateAction<SearchItem | undefined>>
}

interface AppProviderSuccessProps
  extends CellSuccessProps<FindAppProviderQuery> {
  children?: React.ReactNode
}

export const AppContext = createContext<AppContextValue>({
  userCount: 0,
  setSearch: () => {},
})

export const Success = ({ appProvider, children }: AppProviderSuccessProps) => {
  const { organization, userCount } = appProvider
  const { pathname } = useLocation()
  const [search, setSearch] = useState<SearchItem | undefined>(undefined)

  const value = {
    organization,
    userCount,
    search,
    setSearch,
  }

  if ((!organization || !userCount) && pathname !== '/onboarding') {
    return <Redirect to={routes.onboarding()} />
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
