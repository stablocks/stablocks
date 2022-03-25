import type { CompaniesQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import Loader from 'src/ui/Loader'
import InfoImage from 'src/ui/InfoImage'
import Table from 'src/components/Layout/Table'

export const QUERY = gql`
  query CompaniesQuery {
    companies {
      id
      name
      website
      phone
    }
  }
`

export const Loading = () => <Loader />

export const Empty = () => <InfoImage type="empty" message="No companies yet" />

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ companies }: CellSuccessProps<CompaniesQuery>) => {
  const data = companies.map((company, i) => [
    <Link
      key={i}
      to={routes.company({ id: company.id })}
      className="font-medium text-indigo-600 hover:text-indigo-700"
    >
      {company.name}
    </Link>,
    <span key={i} className="text-gray-600">
      {`${company?.website}`}
    </span>,
    <Link
      key={i}
      to={routes.company({ id: company.id })}
      className="text-indigo-600 hover:text-indigo-700"
    >
      View
    </Link>,
  ])

  return (
    <Table
      cols={[
        { label: 'Name' },
        { label: 'Website' },
        { label: 'View', hidden: true },
      ]}
      rows={data}
    />
  )
}
