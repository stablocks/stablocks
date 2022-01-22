import { Disclosure } from '@headlessui/react'
import { routes, useLocation } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import NavLink from 'src/components/Elements/NavLink'
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
    <Disclosure.Button
      as={NavLink}
      to={to}
      basePath={basePath}
      className="group w-full flex items-center pl-11 pr-2 py-2 text-base md:text-sm font-medium rounded-md text-left focus:outline-none focus:ring-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
      activeClassName="bg-gray-900 text-gray-300"
      nonActiveClassName="text-gray-300 hover:bg-gray-700 hover:text-white"
    >
      {name}
    </Disclosure.Button>
  )
}

const Navigation = () => {
  const { pathname } = useLocation()

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
          name: 'Settings',
          to: routes.organizationSettings(),
          authorized: useAuthorization(['admin']),
        },
      ],
    },
    {
      name: 'Contacts',
      to: '#',
      icon: IdentificationIcon,
      authorized: useAuthorization(['admin', 'crmAdmin', 'crm']),
      children: [
        {
          name: 'Companies',
          to: '#',
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
      to: '#',
      icon: CashIcon,
      authorized: useAuthorization(['admin']),
      children: [
        {
          name: 'Accounting',
          to: '#',
          authorized: useAuthorization(['admin', 'hrAdmin', 'hr']),
        },
        {
          name: 'Income',
          to: '#',
          authorized: useAuthorization(['admin', 'hrAdmin', 'hr']),
        },
        {
          name: 'Expenses',
          to: '#',
          authorized: useAuthorization(['admin', 'hrAdmin', 'hr']),
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
      to: '#',
      icon: BriefcaseIcon,
      authorized: useAuthorization([
        'admin',
        'recruitingAdmin',
        'recruiting',
        'external',
      ]),
      children: [
        {
          name: 'Jobs',
          to: '#',
          authorized: useAuthorization([
            'admin',
            'recruitingAdmin',
            'recruiting',
            'external',
          ]),
        },
        {
          name: 'Applications',
          to: '#',
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
      to: '#',
      icon: SupportIcon,
      authorized: useAuthorization([]),
      children: [
        { name: 'Tickets', to: '#', authorized: useAuthorization([]) },
        { name: 'Chat', to: '#', authorized: useAuthorization([]) },
      ],
    },
    {
      name: 'Projects',
      to: '#',
      icon: TemplateIcon,
      authorized: useAuthorization(['admin', 'employee']),
      children: [
        {
          name: 'Tasks',
          to: '#',
          authorized: useAuthorization(['admin', 'employee']),
        },
      ],
    },
  ]

  return (
    <>
      {navigation.map(
        (item) =>
          item.authorized &&
          (!item.children ? (
            <div key={item.name}>
              <NavLink
                to={item.to}
                className="group w-full flex items-center pl-2 pr-1 py-2 text-left text-base md:text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                nonActiveClassName="text-gray-300 hover:bg-gray-700 hover:text-white"
                activeClassName="bg-gray-900 text-gray-300"
              >
                <item.icon
                  className="mr-3 flex-shrink-0 h-6 w-6"
                  aria-hidden="true"
                />
                {item.name}
              </NavLink>
            </div>
          ) : (
            <Disclosure
              as="div"
              key={item.name}
              className="space-y-1"
              defaultOpen={pathname.startsWith(item.to)}
            >
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`${
                      pathname === item.to || pathname.startsWith(item.to)
                        ? 'bg-gray-900 text-gray-300'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    } group w-full flex items-center pl-2 pr-1 py-2 text-left text-base md:text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-gray-800 focus:ring-indigo-500`}
                  >
                    <item.icon
                      className="mr-3 flex-shrink-0 h-6 w-6"
                      aria-hidden="true"
                    />
                    <span className="flex-1">{item.name}</span>
                    <ChevronRightIcon
                      className={`${
                        open ? 'text-gray-400 rotate-90' : 'text-gray-300'
                      } ml-3 flex-shrink-0 h-4 w-4 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="space-y-1">
                    <SubMenuButton
                      name="Overview"
                      to={item.to}
                      basePath={item.to}
                    />
                    {item.children.map(
                      (subItem, i) =>
                        subItem.authorized && (
                          <SubMenuButton
                            key={i}
                            name={subItem.name}
                            to={subItem.to}
                            basePath={item.to}
                          />
                        )
                    )}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))
      )}
    </>
  )
}

export default Navigation
