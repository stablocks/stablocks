import type { FindDepartmentQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, navigate, routes } from '@redwoodjs/router'
import Loader from 'src/ui/Loader'
import InfoImage from 'src/ui/InfoImage'
import PageTitle from 'src/ui/PageTitle'
import Table from 'src/components/Layout/Table'
import { usePermissions } from 'src/utils/permissions'
import { PencilAltIcon } from '@heroicons/react/outline'

export const QUERY = gql`
  query FindDepartmentQuery($id: String!) {
    department(id: $id) {
      id
      name
      email
      employees {
        position
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

const NonSuccessHeader = () => (
  <PageTitle
    title="Department"
    breadcrumbs={[
      { title: 'Organization', to: routes.organization() },
      { title: 'Departments', to: routes.departments() },
    ]}
    search={{ label: 'departments', type: 'department' }}
  />
)

export const Loading = () => (
  <>
    <NonSuccessHeader />
    <Loader />
  </>
)

export const Empty = () => (
  <>
    <NonSuccessHeader />
    <InfoImage type="error" message="This department could not be found" />
  </>
)

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  department,
}: CellSuccessProps<FindDepartmentQuery>) => {
  const data = department.employees.map((employee, i) => [
    <Link
      key={i}
      to={routes.employee({ id: employee.user.id })}
      className="font-medium text-indigo-600 hover:text-indigo-700"
    >
      {`${employee.user.firstName} ${employee.user.lastName}`}
    </Link>,
    <>
      {employee.position && (
        <span key={i} className="text-gray-600">
          {employee.position}
        </span>
      )}
    </>,
    <>
      {employee.user?.email && (
        <a
          href={`mailto:${employee.user.email}`}
          target="_blank"
          rel="noreferrer"
          key={i}
          className="font-medium text-indigo-600 hover:text-indigo-700"
        >
          {`${employee.user.email}`}
        </a>
      )}
    </>,
  ])

  return (
    <>
      <PageTitle
        title={department.name}
        breadcrumbs={[
          { title: 'Organization', to: routes.organization() },
          { title: 'Departments', to: routes.departments() },
        ]}
        search={{ label: 'departments', type: 'department' }}
        buttons={[
          {
            label: 'Edit',
            icon: PencilAltIcon,
            onClick: () =>
              navigate(routes.editDepartment({ id: department.id })),
            authorized: usePermissions(['admin', 'departmentAdmin']),
          },
        ]}
      />

      <Table
        cols={[{ label: 'Name' }, { label: 'Title' }, { label: 'Email' }]}
        rows={data}
      />
    </>
  )
}
