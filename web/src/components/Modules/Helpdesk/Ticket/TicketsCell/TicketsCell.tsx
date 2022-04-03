import type { TicketsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import Loader from 'src/components/UI/Loader'
import InfoImage from 'src/components/UI/InfoImage'

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

export const Loading = () => <Loader />

export const Empty = () => <InfoImage type="empty" message="No tickets yet" />

export const Failure = ({ error }: CellFailureProps) => (
  <InfoImage type="error" message={`${error}`} />
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
