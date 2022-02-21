import type { ProjectsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import Loader from 'src/ui/Loader'
import Table from 'src/components/Layout/Table'

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

export const Loading = () => <Loader />

export const Empty = () => <></>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
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

  return (
    <Table
      cols={[
        { label: 'Title' },
        { label: 'Description' },
        { label: 'Tasks' },
        { label: 'View', hidden: true },
      ]}
      rows={data}
      total={projects.length}
    />
  )
}
