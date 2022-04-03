import type { InvoicesQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import TableLoader from 'src/components/UI/TableLoader'
import Table from 'src/components/UI/Table'

export const QUERY = gql`
  query InvoicesQuery {
    invoices {
      id
      status
      contact {
        id
        firstName
        lastName
      }
      currency
      issued
      dueDate
      paidDate
      description
    }
  }
`

const tableColumns = [{ label: 'ID' }, { label: 'Contact' }]

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
  ])

  return <Table cols={tableColumns} rows={data} total={invoices.length} />
}
