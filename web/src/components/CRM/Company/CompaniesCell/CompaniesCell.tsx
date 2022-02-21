import type { CompaniesQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import TableLoader from 'src/ui/TableLoader'
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
    company?.website ? company.website : '',
    <Link
      key={i}
      to={routes.company({ id: company.id })}
      className="text-indigo-600 hover:text-indigo-700"
    >
      View
    </Link>,
  ])

  return <Table cols={tableColumns} rows={data} total={companies.length} />
}
