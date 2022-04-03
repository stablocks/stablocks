import type { FindEmployeeQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import Loader from 'src/components/UI/Loader'
import PageTitle from 'src/components/UI/PageTitle'
import { PencilAltIcon } from '@heroicons/react/outline'

export const QUERY = gql`
  query FindEmployeeQuery($id: String!) {
    employee(id: $id) {
      id
      firstName
      lastName
      email
      profileImage
    }
  }
`

export const Loading = () => (
  <>
    <PageTitle
      title="Employee"
      breadcrumbs={[
        { title: 'Organization', to: routes.organization() },
        { title: 'Employees', to: routes.employees() },
      ]}
      search={{ label: 'employees', type: 'employee' }}
    />
    <Loader />
  </>
)

export const Empty = () => <></>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ employee }: CellSuccessProps<FindEmployeeQuery>) => {
  const fullName = `${employee.firstName} ${employee.lastName}`

  return (
    <>
      <PageTitle
        title={fullName}
        breadcrumbs={[
          { title: 'Organization', to: routes.organization() },
          { title: 'Employees', to: routes.employees() },
        ]}
        search={{ label: 'employees', type: 'employee' }}
        buttons={[
          {
            label: 'Edit',
            icon: PencilAltIcon,
            onClick: () => navigate(routes.editEmployee({ id: employee.id })),
            roles: ['admin'],
          },
        ]}
      />
    </>
  )
}
