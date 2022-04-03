import { Link, routes } from '@redwoodjs/router'
import PageTitle from 'src/components/UI/PageTitle'

const FinancePage = () => {
  return (
    <>
      <PageTitle title="Finance" />

      <p>
        Find me in <code>./web/src/pages/FinancePage/FinancePage.tsx</code>
      </p>
      <p>
        My default route is named <code>finance</code>, link to me with `
        <Link to={routes.finance()}>Finance</Link>`
      </p>
    </>
  )
}

export default FinancePage
