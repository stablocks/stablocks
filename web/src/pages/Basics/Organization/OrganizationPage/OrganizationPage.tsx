import { Link, routes } from '@redwoodjs/router'
import PageTitle from 'src/components/Layout/PageTitle'

const OrganizationPage = () => {
  return (
    <>
      <PageTitle
        title="Organization"
        search={{ label: 'the organization', type: 'organization' }}
      />

      <p>
        Find me in{' '}
        <code>./web/src/pages/OrganizationPage/OrganizationPage.tsx</code>
      </p>
      <p>
        My default route is named <code>organization</code>, link to me with `
        <Link to={routes.organization()}>Organization</Link>`
      </p>
    </>
  )
}

export default OrganizationPage
