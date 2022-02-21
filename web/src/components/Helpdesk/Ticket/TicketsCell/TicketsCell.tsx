import type { TicketsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import Loader from 'src/ui/Loader'
import Table from 'src/components/Layout/Table'

export const QUERY = gql`
  query TicketsQuery {
    tickets {
      id
      title
      description
    }
  }
`

export const Loading = () => <Loader />

export const Empty = () => <></>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
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

  return (
    <Table
      cols={[
        { label: 'ID' },
        { label: 'Title' },
        { label: 'Description' },
        { label: 'View', hidden: true },
      ]}
      rows={data}
      total={tickets.length}
    />
  )
}
