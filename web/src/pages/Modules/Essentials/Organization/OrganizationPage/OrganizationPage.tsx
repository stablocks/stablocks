import { navigate, routes } from '@redwoodjs/router'
import { usePermissions } from 'src/utils/permissions'
import PageTitle from 'src/components/UI/PageTitle'
import { RiSettings3Line } from 'react-icons/ri'

const OrganizationPage = () => {
  return (
    <>
      <PageTitle
        title="Organization"
        buttons={[
          {
            label: 'Settings',
            icon: RiSettings3Line,
            onClick: () => navigate(routes.organizationSettings()),
            authorized: usePermissions(['admin']),
          },
        ]}
        search={{ label: 'the organization', type: 'organization' }}
      />
    </>
  )
}

export default OrganizationPage
