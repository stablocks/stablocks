import { SkipNavLink } from '@redwoodjs/router'
import MobileSidebar from './MobileSidebar'
import StaticSidebar from './StaticSidebar'
import Navbar from './Navbar'
import Footer from './Footer'

import '@reach/skip-nav/styles.css'

const Dashboard = ({ children }: { children?: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false)

  return (
    <div className="min-h-full flex-1">
      <SkipNavLink contentId="main" />
      <MobileSidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <StaticSidebar />
      <div className="flex min-h-screen w-full flex-col md:pl-64">
        <Navbar setSidebarOpen={setSidebarOpen} />
        <main id="main" className="flex w-full flex-1 flex-col">
          <div className="w-full flex-1 p-6 pb-20 md:px-12">{children}</div>
          <Footer />
        </main>
      </div>
    </div>
  )
}

export default Dashboard
