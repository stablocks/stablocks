import type { TasksQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import Loader from 'src/ui/Loader'
import InfoImage from 'src/ui/InfoImage'

export const QUERY = gql`
  query TasksQuery {
    tasks {
      id
      title
      description
      status
    }
  }
`

export const Loading = () => <Loader />

export const Empty = () => <InfoImage type="empty" message="No tasks yet" />

export const Failure = ({ error }: CellFailureProps) => (
  <InfoImage type="error" message={`${error}`} />
)

export const Success = ({ tasks }: CellSuccessProps<TasksQuery>) => {
  return (
    <ul>
      {tasks.map((item) => {
        return (
          <li key={item.id}>
            <Link to={routes.task({ id: item.id })}>{item.title}</Link>
          </li>
        )
      })}
    </ul>
  )
}
