import type { ProjectsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import Loader from 'src/components/UI/Loader'
import InfoImage from 'src/components/UI/InfoImage'
import Table from 'src/components/UI/Table'

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
    <span key={i} className="text-gray-600">
      {`${project?.description}`}
    </span>,
  ])

  return (
    <Table cols={[{ label: 'Title' }, { label: 'Description' }]} rows={data} />
  )
}
