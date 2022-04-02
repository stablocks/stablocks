import { Link, routes } from '@redwoodjs/router'
import Navigation from '../Navigation'
import Logo from 'src/images/logo.svg'

const StaticSidebar = () => {
  return (
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
  )
}

export default StaticSidebar
