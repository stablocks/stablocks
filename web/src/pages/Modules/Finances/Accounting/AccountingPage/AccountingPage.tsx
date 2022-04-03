import { Link, routes } from '@redwoodjs/router'
import PageTitle from 'src/components/UI/PageTitle'

const AccountingPage = () => {
  return (
    <>
      <PageTitle
        title="Accounting"
        breadcrumbs={[{ title: 'Finance', to: routes.finance() }]}
      />

      <p>
        Find me in{' '}
        <code>./web/src/pages/AccountingPage/AccountingPage.tsx</code>
      </p>
      <p>
        My default route is named <code>accounting</code>, link to me with `
        <Link to={routes.accounting()}>Accounting</Link>`
      </p>
    </>
  )
}

export default AccountingPage
