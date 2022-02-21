import type { ContactsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import TableLoader from 'src/ui/TableLoader'
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

const tableColumns = [
  { label: 'Name' },
  { label: 'Email' },
  { label: 'View', hidden: true },
]

export const Loading = () => <TableLoader cols={tableColumns} />

export const Empty = () => <></>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ contacts }: CellSuccessProps<ContactsQuery>) => {
  const data = contacts.map((contact, i) => [
    <Link
      key={i}
      to={routes.contact({ id: contact.id })}
      className="font-medium text-indigo-600 hover:text-indigo-700"
    >{`${contact.firstName} ${contact.lastName}`}</Link>,
    contact?.email ? contact.email : '',
    <Link
      key={i}
      to={routes.contact({ id: contact.id })}
      className="text-indigo-600 hover:text-indigo-700"
    >
      View
    </Link>,
  ])

  return <Table cols={tableColumns} rows={data} total={contacts.length} />
}
