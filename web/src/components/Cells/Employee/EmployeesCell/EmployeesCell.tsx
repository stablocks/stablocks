import type { EmployeesQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import TableLoader from 'src/ui/TableLoader'
import Table from 'src/components/Layout/Table'

export const QUERY = gql`
  query EmployeesQuery {
    employees {
      id
      firstName
      lastName
      email
      profileImage
      position
      departments {
        id
      }
    }
  }
`

const tableColumns = [
  { label: 'Name' },
  { label: 'Email' },
  { label: 'View', hidden: true },
]

export const Loading = () => <TableLoader cols={tableColumns} />

export const Empty = () => <></>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ employees }: CellSuccessProps<EmployeesQuery>) => {
  const data = employees.map((employee, i) => [
    <Link
      key={i}
      to={routes.employee({ id: employee.id })}
      className="font-medium text-indigo-600 hover:text-indigo-700"
    >{`${employee.firstName} ${employee.lastName}`}</Link>,
    employee.email,
    <Link
      key={i}
      to={routes.employee({ id: employee.id })}
      className="text-indigo-600 hover:text-indigo-700"
    >
      View
    </Link>,
  ])

  return <Table cols={tableColumns} rows={data} total={employees.length} />
}
