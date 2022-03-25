import type { ApplicationsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import TableLoader from 'src/ui/TableLoader'
import Table from 'src/components/Layout/Table'
import InfoImage from 'src/ui/InfoImage'

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

const tableColumns = [
  { label: 'Applicant' },
  { label: 'Position' },
  { label: 'Status' },
  { label: 'View', hidden: true },
]

export const Loading = () => <TableLoader cols={tableColumns} />

export const Empty = () => (
  <InfoImage type="empty" message="No applications yet" />
)

export const Failure = ({ error }: CellFailureProps) => (
  <InfoImage type="error" message={`${error}`} />
)

export const Success = ({
  applications,
}: CellSuccessProps<ApplicationsQuery>) => {
  const data = applications.map((application, i) => [
    <Link
      key={i}
      to={routes.application({ id: application.id })}
      className="font-medium text-indigo-600 hover:text-indigo-700"
    >
      {`${application.user.firstName} ${application.user.lastName}`}
    </Link>,
    <Link
      key={i}
      to={routes.job({ id: application.job.id })}
      className="font-medium text-indigo-600 hover:text-indigo-700"
    >
      {application.job.title}
    </Link>,
    <span key={i} className="uppercase text-xs font-medium">
      {application.status}
    </span>,
    <Link
      key={i}
      to={routes.application({ id: application.id })}
      className="text-indigo-600 hover:text-indigo-700"
    >
      View
    </Link>,
  ])

  return <Table cols={tableColumns} rows={data} total={applications.length} />
}
