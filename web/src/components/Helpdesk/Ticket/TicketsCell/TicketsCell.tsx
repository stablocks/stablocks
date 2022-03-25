import type { TicketsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import TableLoader from 'src/ui/TableLoader'
import Table from 'src/components/Layout/Table'
import InfoImage from 'src/ui/InfoImage'

export const QUERY = gql`
  query TicketsQuery {
    tickets {
      id
      title
      description
      status
    }
  }
`

const tableColumns = [
  { label: 'ID' },
  { label: 'Title' },
  { label: 'Description' },
  { label: 'View', hidden: true },
]

export const Loading = () => <TableLoader cols={tableColumns} />

export const Empty = () => <InfoImage type="empty" message="No tickets yet" />

export const Failure = ({ error }: CellFailureProps) => (
  <InfoImage type="error" message={`${error}`} />
)

export const Success = ({ tickets }: CellSuccessProps<TicketsQuery>) => {
  const data = tickets.map((ticket, i) => [
    `#${ticket.id}`,
    <Link
      key={i}
      to={routes.ticket({ id: ticket.id })}
      className="font-medium text-indigo-600 hover:text-indigo-700"
    >
      {ticket.title}
    </Link>,
    <span key={i} className="block max-w-[24rem] truncate">
      {ticket.description}
    </span>,
    <Link
      key={i}
      to={routes.ticket({ id: ticket.id })}
      className="text-indigo-600 hover:text-indigo-700"
    >
      View
    </Link>,
  ])

  return <Table cols={tableColumns} rows={data} total={tickets.length} />
}
