import type { DepartmentsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import InfoImage from 'src/components/UI/InfoImage'
import Loader from 'src/components/UI/Loader'
import Table from 'src/components/UI/Table'

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

export const Empty = () => (
  <InfoImage type="empty" message="No departments yet" />
)

export const Failure = ({ error }: CellFailureProps) => (
  <InfoImage type="error" message={`${error}`} />
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
  ])

  return <Table cols={[{ label: 'Name' }, { label: 'Email' }]} rows={data} />
}
