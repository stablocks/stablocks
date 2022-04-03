import type { CompaniesQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import TableLoader from 'src/components/UI/TableLoader'
import Table from 'src/components/UI/Table'

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

const tableColumns = [
  { label: 'Name' },
  { label: 'Website' },
  { label: 'View', hidden: true },
]

export const Loading = () => <TableLoader cols={tableColumns} />

export const Empty = () => <></>

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
  ])

  return <Table cols={[{ label: 'Name' }, { label: 'Website' }]} rows={data} />
}
