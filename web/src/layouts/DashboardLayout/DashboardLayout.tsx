import { Fragment, useContext, useEffect, useState } from 'react'
import { useAuth } from '@redwoodjs/auth'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  BellIcon,
  MenuAlt2Icon,
  UserCircleIcon,
  XIcon,
} from '@heroicons/react/outline'
import { SearchIcon } from '@heroicons/react/solid'
import {
  Link,
  Redirect,
  SkipNavLink,
  routes,
  useLocation,
} from '@redwoodjs/router'
import { AppContext } from 'src/components/Providers/AppProviderCell'
import Navigation from 'src/components/Layout/Navigation'
import Popup from 'src/components/Elements/Popup'
import Logo from 'src/lib/logo.svg'

import '@reach/skip-nav/styles.css'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type DashboardLayoutProps = {
  children?: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { pathname } = useLocation()
  const { currentUser, logOut, hasRole } = useAuth()
  const { search } = useContext(AppContext)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const [logoutOpen, setLogoutOpen] = useState(false)

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

  useEffect(() => {
    setSidebarOpen(false)
  }, [pathname])

  if (!currentUser) {
    return <Redirect to={routes.login()} />
  }

  if (!currentUser?.firstName || !currentUser?.lastName) {
    return <Redirect to={routes.userOnboarding()} />
  }

  return (
    <>
      <SkipNavLink contentId="main" />
      <div className="min-h-full flex-1">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-[80] flex md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800 pb-4">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <Link
                  to={routes.home()}
                  className="group flex flex-shrink-0 items-center bg-gray-900 px-4 py-4 transition-colors duration-300 hover:bg-indigo-900"
                >
                  <Logo className="h-8 w-auto fill-current text-indigo-500 transition-colors duration-300 group-hover:text-white" />
                  <h2 className="ml-3 text-xl font-bold text-white">
                    Stablocks
                  </h2>
                </Link>
                <div className="mt-5 h-0 flex-1 overflow-y-auto">
                  <nav className="space-y-1 px-2">
                    <Navigation />
                  </nav>
                </div>
              </div>
            </Transition.Child>
            <div className="w-14 flex-shrink-0" aria-hidden="true">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex min-h-0 flex-1 flex-col bg-gray-800">
            <Link
              to={routes.home()}
              className="group flex h-16 flex-shrink-0 items-center bg-gray-900 px-4 transition-colors duration-300 hover:bg-indigo-900"
            >
              <Logo className="h-8 w-auto fill-current text-indigo-500 transition-colors duration-300 group-hover:text-white" />
              <h2 className="ml-3 text-xl font-bold text-white">Stablocks</h2>
            </Link>
            <div className="flex flex-1 flex-col overflow-y-auto">
              <nav className="flex-1 space-y-1 px-2 py-4">
                <Navigation />
              </nav>
            </div>
          </div>
        </div>

        <div className="flex min-h-full flex-col md:pl-64">
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
              <div className="flex flex-1">
                {search && (
                  <form className="flex w-full md:ml-0" action="#" method="GET">
                    <label htmlFor="search-field" className="sr-only">
                      Search {search.label}
                    </label>
                    <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                        <SearchIcon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <input
                        id="search-field"
                        className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
                        placeholder={`Search ${search.label}`}
                        type="search"
                        name="search"
                        autoComplete="off"
                      />
                    </div>
                  </form>
                )}
              </div>
              <div className="ml-4 flex items-center md:ml-6">
                <button
                  type="button"
                  className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button
                      className={`${
                        currentUser.profileImage
                          ? 'flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                          : 'rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                      }`}
                    >
                      <span className="sr-only">Open user menu</span>
                      {currentUser.profileImage ? (
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      ) : (
                        <UserCircleIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
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

          <main id="main" className="min-h-full">
            <div className="min-h-full p-6 pb-20 md:px-12">{children}</div>
          </main>
        </div>
      </div>
    </>
  )
}

export default DashboardLayout
