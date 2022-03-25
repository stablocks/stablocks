import type { TasksQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import TableLoader from 'src/ui/TableLoader'
import Table from 'src/components/Layout/Table'
import InfoImage from 'src/ui/InfoImage'

export const QUERY = gql`
  query TasksQuery {
    tasks {
      id
      title
      description
      project {
        id
        title
      }
      status
    }
  }
`

const tableColumns = [
  { label: 'Title' },
  { label: 'Description' },
  { label: 'Project' },
  { label: 'View', hidden: true },
]

export const Loading = () => <TableLoader cols={tableColumns} />

export const Empty = () => <InfoImage type="empty" message="No tasks yet" />

export const Failure = ({ error }: CellFailureProps) => (
  <InfoImage type="error" message={`${error}`} />
)

export const Success = ({ tasks }: CellSuccessProps<TasksQuery>) => {
  const data = tasks.map((task, i) => [
    <Link
      key={i}
      to={routes.task({ id: task.id })}
      className="font-medium text-indigo-600 hover:text-indigo-700"
    >
      {task.title}
    </Link>,
    <span key={i} className="block max-w-[24rem] truncate">
      {task.description}
    </span>,
    <Link
      key={i}
      to={routes.project({ id: task.project.id })}
      className="font-medium text-indigo-600 hover:text-indigo-700"
    >
      {task.project.title}
    </Link>,
    <Link
      key={i}
      to={routes.task({ id: task.id })}
      className="text-indigo-600 hover:text-indigo-700"
    >
      View
    </Link>,
  ])

  return <Table cols={tableColumns} rows={data} total={tasks.length} />
}
