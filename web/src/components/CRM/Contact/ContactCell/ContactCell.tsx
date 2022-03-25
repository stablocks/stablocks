import type { FindContactQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import Loader from 'src/ui/Loader'
import InfoImage from 'src/ui/InfoImage'
import PageTitle from 'src/ui/PageTitle'
import { usePermissions } from 'src/utils/permissions'
import { PencilAltIcon } from '@heroicons/react/outline'

export const QUERY = gql`
  query FindContactQuery($id: String!) {
    contact(id: $id) {
      id
      firstName
      lastName
      email
      phone
    }
  }
`

const NonSuccessHeader = () => (
  <PageTitle
    title="Contact"
    breadcrumbs={[{ title: 'Contacts', to: routes.contacts() }]}
    search={{ label: 'contacts', type: 'contact' }}
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
    <InfoImage type="error" message="This contact could not be found" />
  </>
)

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ contact }: CellSuccessProps<FindContactQuery>) => {
  const fullName = `${contact.firstName} ${contact.lastName}`

  return (
    <>
      <PageTitle
        title={fullName}
        breadcrumbs={[{ title: 'Contacts', to: routes.contacts() }]}
        search={{ label: 'contacts', type: 'contact' }}
        buttons={[
          {
            label: 'Edit',
            icon: PencilAltIcon,
            onClick: () => navigate(routes.editContact({ id: contact.id })),
            authorized: usePermissions(['admin', 'crmAdmin', 'crm']),
          },
        ]}
      />

      <div>{JSON.stringify(contact)}</div>
    </>
  )
}
