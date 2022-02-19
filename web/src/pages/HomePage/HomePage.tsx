import { Link, routes } from '@redwoodjs/router'
import PageTitle from 'src/ui/PageTitle'

const HomePage = () => {
  return (
    <>
      <PageTitle title="Dashboard" />

      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
    </>
  )
}

export default HomePage
