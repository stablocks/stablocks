import type { JobsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import TableLoader from 'src/ui/TableLoader'
import Table from 'src/components/Layout/Table'

export const QUERY = gql`
  query JobsQuery {
    jobs {
      id
      title
      description
      applications {
        id
      }
    }
  }
`

const tableColumns = [
  { label: 'Title' },
  { label: 'Description' },
  { label: 'Applications' },
  { label: 'View', hidden: true },
]

export const Loading = () => <TableLoader cols={tableColumns} />

export const Empty = () => <></>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ jobs }: CellSuccessProps<JobsQuery>) => {
  const data = jobs.map((job, i) => [
    <Link
      key={i}
      to={routes.job({ id: job.id })}
      className="font-medium text-indigo-600 hover:text-indigo-700"
    >
      {job.title}
    </Link>,
    <span key={i} className="block max-w-[24rem] truncate">
      {job.description}
    </span>,
    job.applications.length,
    <Link
      key={i}
      to={routes.job({ id: job.id })}
      className="text-indigo-600 hover:text-indigo-700"
    >
      View
    </Link>,
  ])

  return <Table cols={tableColumns} rows={data} total={jobs.length} />
}
