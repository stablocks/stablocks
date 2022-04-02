import { useContext, useEffect, useState } from 'react'
import { routes, useLocation } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import { AppContext } from 'src/components/AppCells/AppProviderCell'
import NavLink from './NavLink'
import {
  BriefcaseIcon,
  CashIcon,
  ChartSquareBarIcon,
  ChevronRightIcon,
  HomeIcon,
  IdentificationIcon,
  OfficeBuildingIcon,
  TemplateIcon,
  SpeakerphoneIcon,
  SupportIcon,
  UserGroupIcon,
} from '@heroicons/react/outline'

interface SubMenuButtonProps {
  name: string
  to: string
  basePath: string
}

interface BaseNavItem {
  name: string
  to: string
  authorized: boolean
  conditional?: boolean
}

interface NavItem extends BaseNavItem {
  icon: (props: React.ComponentProps<'svg'>) => JSX.Element
  children?: BaseNavItem[]
}

const useAuthorization = (roles: string[]): boolean => {
  const { hasRole } = useAuth()

  if (!roles || roles.length === 0) return true

  return hasRole(roles)
}

const SubMenuButton = ({ name, to, basePath }: SubMenuButtonProps) => {
  return (
    <NavLink
      to={to}
      basePath={basePath}
      className="group flex w-full items-center rounded-md py-2 pl-11 pr-2 text-left text-base font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-gray-800 md:text-sm"
      activeClassName="bg-gray-900 text-gray-300"
      nonActiveClassName="text-gray-300 hover:bg-gray-700 hover:text-white"
    >
      {name}
    </NavLink>
  )
}

const Navigation = () => {
  const { organization } = useContext(AppContext)

  const navigation: NavItem[] = [
    { name: 'Dashboard', to: routes.home(), icon: HomeIcon, authorized: true },
    {
      name: 'Organization',
      to: routes.organization(),
      icon: OfficeBuildingIcon,
      authorized: useAuthorization(['admin', 'employee']),
      children: [
        {
          name: 'Employees',
          to: routes.employees(),
          authorized: useAuthorization(['admin', 'employee']),
        },
        {
          name: 'Departments',
          to: routes.departments(),
          authorized: useAuthorization(['admin', 'employee']),
        },
        {
          name: 'Settings',
          to: routes.organizationSettings(),
          authorized: useAuthorization(['admin']),
        },
      ],
    },
    {
      name: 'Contacts',
      to: routes.contacts(),
      icon: IdentificationIcon,
      authorized: useAuthorization(['admin', 'crmAdmin', 'crm']),
      conditional: organization.crm,
      children: [
        {
          name: 'Companies',
          to: routes.companies(),
          authorized: useAuthorization(['admin', 'crmAdmin', 'crm']),
        },
      ],
    },
    {
      name: 'Marketing',
      to: '#',
      icon: SpeakerphoneIcon,
      authorized: useAuthorization(['admin', 'marketingAdmin', 'marketing']),
    },
    {
      name: 'Sales',
      to: '#',
      icon: ChartSquareBarIcon,
      authorized: useAuthorization(['admin', 'salesAdmin', 'sales']),
    },
    {
      name: 'Finance',
      to: routes.finance(),
      icon: CashIcon,
      authorized: useAuthorization(['admin']),
      conditional: organization.finance,
      children: [
        {
          name: 'Accounting',
          to: routes.accounting(),
          authorized: useAuthorization(['admin', 'financeAdmin', 'finance']),
          conditional:
            !process.env.PLAID_CLIENT_ID || !process.env.PLAID_SECRET
              ? false
              : true,
        },
        {
          name: 'Invoices',
          to: routes.invoices(),
          authorized: useAuthorization(['admin', 'financeAdmin', 'finance']),
          conditional:
            !process.env.PLAID_CLIENT_ID || !process.env.PLAID_SECRET
              ? false
              : true,
        },
        {
          name: 'Income',
          to: routes.incomes(),
          authorized: useAuthorization(['admin', 'financeAdmin', 'finance']),
          conditional:
            !process.env.PLAID_CLIENT_ID || !process.env.PLAID_SECRET
              ? false
              : true,
        },
        {
          name: 'Expenses',
          to: routes.expenses(),
          authorized: useAuthorization(['admin', 'financeAdmin', 'finance']),
          conditional:
            !process.env.PLAID_CLIENT_ID || !process.env.PLAID_SECRET
              ? false
              : true,
        },
      ],
    },
    {
      name: 'HR',
      to: '#',
      icon: UserGroupIcon,
      authorized: useAuthorization(['admin', 'hrAdmin', 'hr']),
      children: [
        {
          name: 'Onboarding',
          to: '#',
          authorized: useAuthorization(['admin', 'hrAdmin', 'hr']),
        },
      ],
    },
    {
      name: 'Recruiting',
      to: routes.recruiting(),
      icon: BriefcaseIcon,
      authorized: useAuthorization([
        'admin',
        'recruitingAdmin',
        'recruiting',
        'external',
      ]),
      conditional: organization.recruiting,
      children: [
        {
          name: 'Jobs',
          to: routes.jobs(),
          authorized: useAuthorization([
            'admin',
            'recruitingAdmin',
            'recruiting',
            'external',
          ]),
        },
        {
          name: 'Applications',
          to: routes.applications(),
          authorized: useAuthorization([
            'admin',
            'recruitingAdmin',
            'recruiting',
            'external',
          ]),
        },
      ],
    },
    {
      name: 'Helpdesk',
      to: routes.helpdesk(),
      icon: SupportIcon,
      authorized: useAuthorization([]),
      conditional: organization.helpdesk,
      children: [
        {
          name: 'Tickets',
          to: routes.tickets(),
          authorized: useAuthorization([]),
        },
        { name: 'Chat', to: routes.chat(), authorized: useAuthorization([]) },
      ],
    },
    {
      name: 'Projects',
      to: routes.projects(),
      icon: TemplateIcon,
      authorized: useAuthorization(['admin', 'employee']),
      conditional: organization.projects,
      children: [
        {
          name: 'Tasks',
          to: routes.tasks(),
          authorized: useAuthorization(['admin', 'employee']),
        },
      ],
    },
  ]

  return (
    <>
      {navigation.map(
        (item, i) =>
          item.authorized &&
          (item.conditional === true || item.conditional === undefined) &&
          (!item.children ? (
            <div key={item.name}>
              <NavLink
                to={item.to}
                className="group flex w-full items-center rounded-md py-2 pl-2 pr-1 text-left text-base font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 md:text-sm"
                nonActiveClassName="text-gray-300 hover:bg-gray-700 hover:text-white"
                activeClassName="bg-gray-900 text-gray-300"
              >
                <item.icon
                  className="mr-3 h-6 w-6 flex-shrink-0"
                  aria-hidden="true"
                />
                {item.name}
              </NavLink>
            </div>
          ) : (
            <SubNavigation key={i} id={i} item={item} />
          ))
      )}
    </>
  )
}

type SubNavigationProps = {
  id: number
  item: NavItem
}

const SubNavigation = (props: SubNavigationProps) => {
  const { item } = props
  const { pathname } = useLocation()

  const [isOpen, setIsOpen] = useState(pathname.startsWith(item.to))

  const id = `navigation-dropdown-${props.id}`

  const onToggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    setIsOpen(pathname.startsWith(item.to))
  }, [item.to, pathname])

  return (
    <>
      <button
        type="button"
        className={`${
          pathname.startsWith(item.to)
            ? 'bg-gray-900 text-gray-300'
            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
        } group flex w-full items-center rounded-md py-2 pl-2 pr-1 text-left text-base font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-gray-800 md:text-sm`}
        onClick={onToggle}
        aria-controls={isOpen ? id : null}
        aria-expanded={isOpen}
      >
        <item.icon className="mr-3 h-6 w-6 flex-shrink-0" aria-hidden="true" />
        <span className="flex-1">{item.name}</span>
        <ChevronRightIcon
          className={`${
            isOpen ? 'rotate-90 text-gray-400' : 'text-gray-300'
          } ml-3 h-4 w-4 flex-shrink-0 transform transition-colors duration-300 ease-in-out group-hover:text-gray-400`}
        />
      </button>
      {isOpen && (
        <div id={id} className="space-y-1">
          <SubMenuButton name="Overview" to={item.to} basePath={item.to} />
          {item.children.map(
            (subItem, i) =>
              subItem.authorized &&
              (item.conditional === true || item.conditional === undefined) &&
              (subItem.conditional === true ||
                subItem.conditional === undefined) && (
                <SubMenuButton
                  key={i}
                  name={subItem.name}
                  to={subItem.to}
                  basePath={item.to}
                />
              )
          )}
        </div>
      )}
    </>
  )
}

export default Navigation
