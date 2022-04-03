import type { EmployeesQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import Loader from 'src/components/UI/Loader'
import Table from 'src/components/UI/Table'

export const QUERY = gql`
  query EmployeesQuery {
    employees {
      id
      firstName
      lastName
      email
      profileImage
      employee {
        position
        departments {
          id
        }
      }
    }
  }
`

export const Loading = () => <Loader />

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
    <>
      {employee?.employee.position && (
        <span key={i} className="text-gray-600">
          {employee.employee.position}
        </span>
      )}
    </>,
    <span key={i} className="text-gray-600">
      {employee.email}
    </span>,
  ])

  return (
    <>
      <Table
        cols={[{ label: 'Name' }, { label: 'Title' }, { label: 'Email' }]}
        rows={data}
      />
    </>
  )
}
