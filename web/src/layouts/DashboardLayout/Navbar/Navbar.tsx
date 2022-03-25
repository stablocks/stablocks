import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import { Menu, Transition } from '@headlessui/react'
import { AppContext } from 'src/components/Providers/AppProviderCell'
import ReleasesCell from 'src/components/Cells/ReleasesCell'
import Popup from 'src/components/Elements/Popup'
import SearchPopup from './SearchPopup'
import { classNames } from 'src/utils/base'
import {
  MenuAlt2Icon,
  SearchIcon,
  SparklesIcon,
  UserCircleIcon,
} from '@heroicons/react/outline'

type NavbarProps = {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar = (props: NavbarProps) => {
  const { setSidebarOpen } = props
  const { search } = React.useContext(AppContext)
  const { currentUser, logOut, hasRole } = useAuth()

  const [searchIsOpen, setSearchIsOpen] = React.useState(false)
  const [releasesOpen, setReleasesOpen] = React.useState(false)
  const [logoutOpen, setLogoutOpen] = React.useState(false)

  const userNavigation = [
    {
      name: 'Your Profile',
      href: hasRole(['admin', 'employee'])
        ? routes.employee({
            id:
              typeof currentUser.id !== 'string'
                ? currentUser.id.toString()
                : currentUser.id,
          })
        : routes.profile(),
    },
  ]

  return (
    <div className="sticky top-0 z-[70] flex h-16 flex-shrink-0 border-b border-gray-300 bg-white">
      <button
        type="button"
        className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
      </button>
      <div className="flex flex-1 justify-between px-4">
        <div className="relative flex flex-1">
          {search && (
            <>
              <button
                className="flex w-full items-center text-gray-400 md:ml-0"
                onClick={() => setSearchIsOpen(true)}
              >
                <SearchIcon className="h-5 w-5" aria-hidden="true" />
                <span className="py-2 px-3 text-sm text-gray-500">{`Search ${search.label}`}</span>
              </button>
              <SearchPopup isOpen={searchIsOpen} setIsOpen={setSearchIsOpen} />
            </>
          )}
        </div>
        <div className="ml-4 flex items-center md:ml-6">
          <button
            type="button"
            onClick={() => setReleasesOpen(true)}
            className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span className="sr-only">View updates</span>
            <SparklesIcon className="h-6 w-6" aria-hidden="true" />
          </button>

          <Popup
            isOpen={releasesOpen}
            setIsOpen={setReleasesOpen}
            title="Latest updates"
          >
            <ReleasesCell />
          </Popup>

          {/* Profile dropdown */}
          <Menu as="div" className="relative ml-3">
            <div>
              <Menu.Button
                className={`${
                  currentUser?.profileImage
                    ? 'flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                    : 'rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                }`}
              >
                <span className="sr-only">Open user menu</span>
                {currentUser?.profileImage ? (
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                ) : (
                  <UserCircleIcon className="h-6 w-6" aria-hidden="true" />
                )}
              </Menu.Button>
            </div>
            <Transition
              as={React.Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md border border-gray-300 bg-white py-1 focus:outline-none">
                {userNavigation?.map((item) => (
                  <Menu.Item key={item.name}>
                    {({ active }) => (
                      <Link
                        to={item.href}
                        className={classNames(
                          active ? 'bg-gray-100' : '',
                          'block px-4 py-2 text-sm text-gray-700'
                        )}
                      >
                        {item.name}
                      </Link>
                    )}
                  </Menu.Item>
                ))}
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={classNames(
                        active ? 'bg-gray-100' : '',
                        'block w-full px-4 py-2 text-left text-sm text-gray-700'
                      )}
                      onClick={() => setLogoutOpen(true)}
                    >
                      Sign out
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>

          <Popup
            isOpen={logoutOpen}
            setIsOpen={setLogoutOpen}
            title="Sign out"
            description="Are you sure you want to sign out? You will need to log back in to access Stablocks."
            buttons={[
              { label: 'Cancel', onClick: () => setLogoutOpen(false) },
              { label: 'Sign out', onClick: () => logOut(), main: true },
            ]}
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar
