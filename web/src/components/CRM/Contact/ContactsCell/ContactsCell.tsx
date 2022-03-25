import type { ContactsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import Loader from 'src/ui/Loader'
import InfoImage from 'src/ui/InfoImage'
import Table from 'src/components/Layout/Table'

export const QUERY = gql`
  query ContactsQuery {
    contacts {
      id
      firstName
      lastName
      email
      phone
    }
  }
`

export const Loading = () => <Loader />

export const Empty = () => <InfoImage type="empty" message="No contacts yet" />

export const Failure = ({ error }: CellFailureProps) => (
  <InfoImage type="error" message={`${error}`} />
)

export const Success = ({ contacts }: CellSuccessProps<ContactsQuery>) => {
  const data = contacts.map((contact, i) => [
    <Link
      key={i}
      to={routes.contact({ id: contact.id })}
      className="font-medium text-indigo-600 hover:text-indigo-700"
    >{`${contact.firstName} ${contact.lastName}`}</Link>,
    <span key={i} className="text-gray-600">
      {`${contact?.email}`}
    </span>,
    <Link
      key={i}
      to={routes.contact({ id: contact.id })}
      className="text-indigo-600 hover:text-indigo-700"
    >
      View
    </Link>,
  ])

  return (
    <Table
      cols={[
        { label: 'Name' },
        { label: 'Email' },
        { label: 'View', hidden: true },
      ]}
      rows={data}
    />
  )
}
