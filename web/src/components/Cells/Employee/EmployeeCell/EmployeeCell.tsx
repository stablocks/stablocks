import type { FindEmployeeQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, navigate, routes } from '@redwoodjs/router'
import Loader from 'src/ui/Loader'
import PageTitle from 'src/ui/PageTitle'
import PageContentLayout from 'src/layouts/PageContentLayout'
import ContentBlock from 'src/ui/ContentBlock'
import { PencilAltIcon } from '@heroicons/react/outline'

export const QUERY = gql`
  query FindEmployeeQuery($id: String!) {
    employee(id: $id) {
      id
      firstName
      lastName
      email
      profileImage
      supervisor {
        id
        firstName
        lastName
      }
      employees {
        id
        firstName
        lastName
      }
      departments {
        id
        name
      }
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
      <PageContentLayout
        aside={
          <>
            {employee.supervisor && (
              <ContentBlock title="Supervisor">
                <Link to={routes.employee({ id: employee.supervisor.id })}>
                  {`${employee.supervisor.firstName} ${employee.supervisor.lastName}`}
                </Link>
              </ContentBlock>
            )}
            {employee.employees && employee.employees.length > 0 && (
              <ContentBlock title="Employees">
                {employee.employees.map((sub) => (
                  <Link key={sub.id} to={routes.employee({ id: sub.id })}>
                    {`${sub.firstName} ${sub.lastName}`}
                  </Link>
                ))}
              </ContentBlock>
            )}
          </>
        }
      >
        <ContentBlock title={fullName} />
      </PageContentLayout>
    </>
  )
}
