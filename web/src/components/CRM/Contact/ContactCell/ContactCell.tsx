import type { FindContactQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import Loader from 'src/ui/Loader'
import PageTitle from 'src/ui/PageTitle'
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

export const Loading = () => (
  <>
    <PageTitle
      title="Contact"
      breadcrumbs={[{ title: 'Contacts', to: routes.contacts() }]}
      search={{ label: 'contacts', type: 'contact' }}
    />
    <Loader />
  </>
)

export const Empty = () => <></>

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
            roles: ['admin', 'crmAdmin', 'crm'],
          },
        ]}
      />

      <div>{JSON.stringify(contact)}</div>
    </>
  )
}
