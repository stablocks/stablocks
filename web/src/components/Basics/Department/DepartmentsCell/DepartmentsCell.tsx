import type { DepartmentsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import Loader from 'src/ui/Loader'
import InfoImage from 'src/ui/InfoImage'
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
    <>
      {department?.email && (
        <a
          href={`mailto:${department.email}`}
          target="_blank"
          rel="noreferrer"
          key={i}
          className="font-medium text-indigo-600 hover:text-indigo-700"
        >
          {`${department.email}`}
        </a>
      )}
    </>,
  ])

  return <Table cols={[{ label: 'Name' }, { label: 'Email' }]} rows={data} />
}
