import type { InvoicesQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import TableLoader from 'src/ui/TableLoader'
import Table from 'src/components/Layout/Table'

export const QUERY = gql`
  query InvoicesQuery {
    invoices {
      id
      contact {
        id
        firstName
        lastName
      }
      currency
      issued
      dueDate
      sent
      paid
      description
    }
  }
`

const tableColumns = [
  { label: 'ID' },
  { label: 'Contact' },
  { label: 'View', hidden: true },
]

export const Loading = () => <TableLoader cols={tableColumns} />

export const Empty = () => <></>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ invoices }: CellSuccessProps<InvoicesQuery>) => {
  const data = invoices.map((invoice, i) => [
    `#${invoice.id}`,
    <Link
      key={i}
      to={routes.contact({ id: invoice.contact.id })}
      className="font-medium text-indigo-600 hover:text-indigo-700"
    >
      {`${invoice.contact.firstName} ${invoice.contact.lastName}`}
    </Link>,
    <Link
      key={i}
      to={routes.invoice({ id: invoice.id })}
      className="text-indigo-600 hover:text-indigo-700"
    >
      View
    </Link>,
  ])

  return <Table cols={tableColumns} rows={data} total={invoices.length} />
}
