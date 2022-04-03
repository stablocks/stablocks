import { navigate, routes } from '@redwoodjs/router'
import { AppContext } from 'src/components/AppCells/AppProviderCell'
import PageTitle from 'src/components/UI/PageTitle'
import { RiSettings3Line } from 'react-icons/ri'

const OrganizationPage = () => {
  const { organization } = React.useContext(AppContext)

  return (
    <>
      <PageTitle
        title={organization.name}
        currentCrumbLabel="Organization"
        buttons={[
          {
            label: 'Settings',
            icon: RiSettings3Line,
            onClick: () => navigate(routes.organizationSettings()),
            roles: ['admin'],
          },
        ]}
        search={{ label: 'the organization', type: 'organization' }}
      />
    </>
  )
}

export default OrganizationPage
