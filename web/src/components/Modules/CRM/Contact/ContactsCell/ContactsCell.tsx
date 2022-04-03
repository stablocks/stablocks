import type { ContactsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import InfoImage from 'src/components/UI/InfoImage'
import Loader from 'src/components/UI/Loader'
import Table from 'src/components/UI/Table'

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
  ])

  return <Table cols={[{ label: 'Name' }, { label: 'Email' }]} rows={data} />
}
