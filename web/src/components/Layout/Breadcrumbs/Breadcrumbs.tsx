import { Link, back, useLocation } from '@redwoodjs/router'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { HomeIcon } from '@heroicons/react/outline'

export interface Breadcrumb {
  title: string
  to: string
}

interface BreadcrumbsProps {
  breadcrumbs?: Breadcrumb[]
  currentCrumbLabel: string
}

const Breadcrumbs = ({ breadcrumbs, currentCrumbLabel }: BreadcrumbsProps) => {
  const { pathname } = useLocation()

  return (
    <div>
      <nav className="sm:hidden" aria-label="Back">
        <button
          onClick={back}
          className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
        >
          <ChevronLeftIcon
            className="-ml-1 mr-1 h-5 w-5 flex-shrink-0 text-gray-400"
            aria-hidden="true"
          />
          Back
        </button>
      </nav>
      {pathname !== '/' && (
        <nav className="hidden sm:flex" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center space-x-4">
            <li>
              <div>
                <Link to="/" className="text-gray-400 hover:text-gray-500">
                  <HomeIcon
                    className="h-5 w-5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Home</span>
                </Link>
              </div>
            </li>
            {breadcrumbs?.map((breadcrumb, i) => (
              <li key={i}>
                <div className="flex items-center">
                  <ChevronRightIcon
                    className="mr-4 h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <Link
                    to={breadcrumb.to}
                    className="rounded-sm text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    {breadcrumb.title}
                  </Link>
                </div>
              </li>
            ))}

            <li>
              <div className="flex items-center">
                <ChevronRightIcon
                  className="mr-4 h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <span
                  aria-current="page"
                  className="text-sm font-medium text-gray-500"
                >
                  {currentCrumbLabel}
                </span>
              </div>
            </li>
          </ol>
        </nav>
      )}
    </div>
  )
}

export default Breadcrumbs
