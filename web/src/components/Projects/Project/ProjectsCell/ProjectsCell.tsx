import type { ProjectsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import TableLoader from 'src/ui/TableLoader'
import Table from 'src/components/Layout/Table'
import InfoImage from 'src/ui/InfoImage'

export const QUERY = gql`
  query ProjectsQuery {
    projects {
      id
      title
      description
      tasks {
        id
      }
    }
  }
`

const tableColumns = [
  { label: 'Title' },
  { label: 'Description' },
  { label: 'Tasks' },
  { label: 'View', hidden: true },
]

export const Loading = () => <TableLoader cols={tableColumns} />

export const Empty = () => <InfoImage type="empty" message="No projects yet" />

export const Failure = ({ error }: CellFailureProps) => (
  <InfoImage type="error" message={`${error}`} />
)

export const Success = ({ projects }: CellSuccessProps<ProjectsQuery>) => {
  const data = projects.map((project, i) => [
    <Link
      key={i}
      to={routes.project({ id: project.id })}
      className="font-medium text-indigo-600 hover:text-indigo-700"
    >
      {project.title}
    </Link>,
    <span key={i} className="block max-w-[24rem] truncate">
      {project.description}
    </span>,
    project.tasks.length,
    <Link
      key={i}
      to={routes.project({ id: project.id })}
      className="text-indigo-600 hover:text-indigo-700"
    >
      View
    </Link>,
  ])

  return <Table cols={tableColumns} rows={data} total={projects.length} />
}
