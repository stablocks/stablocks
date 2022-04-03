import type { ApplicationsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import Loader from 'src/components/UI/Loader'
import InfoImage from 'src/components/UI/InfoImage'

export const QUERY = gql`
  query ApplicationsQuery {
    applications {
      id
      job {
        id
        title
      }
      user {
        id
        firstName
        lastName
      }
      status
    }
  }
`

export const Loading = () => <Loader />

export const Empty = () => (
  <InfoImage type="empty" message="No applications yet" />
)

export const Failure = ({ error }: CellFailureProps) => (
  <InfoImage type="error" message={`${error}`} />
)

export const Success = ({
  applications,
}: CellSuccessProps<ApplicationsQuery>) => {
  return (
    <ul>
      {applications.map((item) => {
        return (
          <li key={item.id}>
            <Link to={routes.application({ id: item.id })}>{item.id}</Link>
          </li>
        )
      })}
    </ul>
  )
}
