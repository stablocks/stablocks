import type { FindCompanyQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import InfoImage from 'src/components/UI/InfoImage'
import { usePermissions } from 'src/utils/permissions'
import Loader from 'src/components/UI/Loader'
import PageTitle from 'src/components/UI/PageTitle'
import { PencilAltIcon } from '@heroicons/react/outline'

export const QUERY = gql`
  query FindCompanyQuery($id: String!) {
    company(id: $id) {
      id
      name
      website
      phone
    }
  }
`

const NonSuccessHeader = () => (
  <PageTitle
    title="Company"
    breadcrumbs={[
      { title: 'Contacts', to: routes.contacts() },
      { title: 'Companies', to: routes.companies() },
    ]}
    search={{ label: 'companies', type: 'company' }}
  />
)

export const Loading = () => (
  <>
    <NonSuccessHeader />
    <Loader />
  </>
)

export const Empty = () => (
  <>
    <NonSuccessHeader />
    <InfoImage type="error" message="This company could not be found" />
  </>
)

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ company }: CellSuccessProps<FindCompanyQuery>) => {
  return (
    <>
      <PageTitle
        title={company.name}
        breadcrumbs={[
          { title: 'Contacts', to: routes.contacts() },
          { title: 'Companies', to: routes.companies() },
        ]}
        search={{ label: 'companies', type: 'company' }}
        buttons={[
          {
            label: 'Edit',
            icon: PencilAltIcon,
            onClick: () => navigate(routes.editCompany({ id: company.id })),
            authorized: usePermissions(['admin', 'crmAdmin', 'crm']),
          },
        ]}
      />

      <div>{JSON.stringify(company)}</div>
    </>
  )
}
