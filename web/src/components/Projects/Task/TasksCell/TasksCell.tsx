import type { TasksQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import Loader from 'src/ui/Loader'

export const QUERY = gql`
  query TasksQuery {
    tasks {
      id
      title
      description
    }
  }
`

export const Loading = () => <Loader />

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
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
