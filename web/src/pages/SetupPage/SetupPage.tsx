import { useContext } from 'react'
import { Link, Redirect, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'
import { ArrowNarrowRightIcon } from '@heroicons/react/outline'
import { BadgeCheckIcon } from '@heroicons/react/solid'
import { AppContext } from 'src/components/AppCells/AppProviderCell'
import NewOrganization from 'src/components/Modules/Essentials/Organization/NewOrganization'
import NewFirstUser from 'src/components/Essentials/User/NewFirstUser'

const SetupPage = () => {
  const { currentUser } = useAuth()
  const { organization, userCount } = useContext(AppContext)

  if (organization && userCount && currentUser) {
    return <Redirect to={routes.home()} />
  }

  if (organization && userCount) {
    return <Redirect to={routes.login()} />
  }

  return (
    <>
      <MetaTags title="Setup" />
      <main className="flex h-full justify-center py-12 px-4 md:py-16 md:px-12">
        <div className="mx-auto w-full max-w-5xl">
          <div className="mb-5 border-b border-gray-200 pb-5">
            <h3 className="text-3xl font-bold leading-6 text-gray-900">
              Stablocks Setup
            </h3>
          </div>

          <div>
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Company
                  </h3>
                  {!organization && (
                    <p className="mt-1 text-sm text-gray-600">
                      This information will be displayed publicly.
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-5 md:col-span-2 md:mt-0">
                {!organization ? (
                  <div className="overflow-hidden rounded-md border border-gray-300">
                    <NewOrganization />
                  </div>
                ) : (
                  <div className="flex px-4 sm:px-0 md:justify-end">
                    <BadgeCheckIcon className="h-8 w-8 text-green-600" />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200" />
            </div>
          </div>

          <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Personal Information
                  </h3>
                  {organization && userCount === 0 && (
                    <p className="mt-1 text-sm text-gray-600">
                      You will be setup as the initial admin of the
                      organization.
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-5 md:col-span-2 md:mt-0">
                {organization && userCount === 0 ? (
                  <div className="overflow-hidden rounded-md border border-gray-300">
                    <NewFirstUser />
                  </div>
                ) : (
                  <div className="flex px-4 sm:px-0 md:justify-end">
                    {userCount > 0 && (
                      <BadgeCheckIcon className="h-8 w-8 text-green-600" />
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200" />
            </div>
          </div>

          {organization && userCount > 0 && (
            <div className="flex justify-end">
              <Link
                to={routes.login()}
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Login
                <ArrowNarrowRightIcon
                  className="ml-2 h-5 w-5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          )}
        </div>
      </main>
    </>
  )
}

export default SetupPage
