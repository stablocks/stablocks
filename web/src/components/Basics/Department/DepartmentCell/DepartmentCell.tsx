import type { FindDepartmentQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import Loader from 'src/ui/Loader'
import PageTitle from 'src/ui/PageTitle'
import { PencilAltIcon } from '@heroicons/react/outline'

export const QUERY = gql`
  query FindDepartmentQuery($id: String!) {
    department(id: $id) {
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

export const Loading = () => (
  <>
    <PageTitle
      title="Department"
      breadcrumbs={[
        { title: 'Organization', to: routes.organization() },
        { title: 'Departments', to: routes.departments() },
      ]}
      search={{ label: 'departments', type: 'department' }}
    />
    <Loader />
  </>
)

export const Empty = () => <></>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  department,
}: CellSuccessProps<FindDepartmentQuery>) => {
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
            roles: ['admin', 'departmentAdmin'],
          },
        ]}
      />

      <div>{JSON.stringify(department)}</div>
    </>
  )
}
