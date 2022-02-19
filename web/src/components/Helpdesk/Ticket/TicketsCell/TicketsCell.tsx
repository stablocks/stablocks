import type { TicketsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import Loader from 'src/ui/Loader'

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
  return (
    <ul>
      {tickets.map((item) => {
        return (
          <li key={item.id}>
            <Link to={routes.ticket({ id: item.id })}>{item.title}</Link>
          </li>
        )
      })}
    </ul>
  )
}
