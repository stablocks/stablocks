import type { DepartmentsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import Loader from 'src/ui/Loader'
import Table from 'src/components/Layout/Table'

export const QUERY = gql`
  query DepartmentsQuery {
    departments {
      id
      name
      email
      employees {
        user {
          id
          firstName
          lastName
        }
      }
      department {
        id
        name
      }
      subDepartments {
        id
        name
      }
    }
  }
`

export const Loading = () => <Loader />

export const Empty = () => <></>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  departments,
}: CellSuccessProps<DepartmentsQuery>) => {
  const data = departments.map((department, i) => [
    <Link
      key={i}
      to={routes.department({ id: department.id })}
      className="font-medium text-indigo-600 hover:text-indigo-700"
    >
      {department.name}
    </Link>,
    <span key={i} className="text-gray-600">
      {`${department?.email}`}
    </span>,
    <Link
      key={i}
      to={routes.department({ id: department.id })}
      className="text-indigo-600 hover:text-indigo-700"
    >
      View
    </Link>,
  ])

  return (
    <Table
      cols={[
        { label: 'Name' },
        { label: 'Email' },
        { label: 'View', hidden: true },
      ]}
      rows={data}
    />
  )
}
