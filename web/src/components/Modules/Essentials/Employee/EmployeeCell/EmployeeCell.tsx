import type { FindEmployeeQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, navigate, routes } from '@redwoodjs/router'
import PageContentLayout from 'src/layouts/PageContentLayout'
import ContentBlock from 'src/ui/ContentBlock'
import { usePermissions } from 'src/utils/permissions'
import {
  IdentificationIcon,
  PencilAltIcon,
  UserIcon,
  UserGroupIcon,
} from '@heroicons/react/outline'
import Loader from 'src/components/UI/Loader'
import PageTitle from 'src/components/UI/PageTitle'

export const QUERY = gql`
  query FindEmployeeQuery($id: String!) {
    employee(id: $id) {
      id
      firstName
      lastName
      email
      profileImage
      employee {
        position
        supervisor {
          position
          user {
            id
            firstName
            lastName
          }
        }
        departments {
          id
          name
        }
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

  const EmployeeLink = ({
    id,
    name,
    position,
  }: {
    id: string
    name: string
    position?: string
  }) => {
    return (
      <li className="flex items-center justify-between">
        <Link
          to={routes.employee({ id })}
          className="mr-2 text-sm font-medium text-indigo-600 hover:text-indigo-700"
        >
          {name}
        </Link>
        {position && (
          <span className="text-xs text-right text-gray-500">{position}</span>
        )}
      </li>
    )
  }

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
            authorized: usePermissions('admin', employee.id),
          },
        ]}
      />
      <PageContentLayout
        aside={
          <>
            {employee.supervisor && (
              <ContentBlock title="Supervisor" icon={UserIcon}>
                <ul>
                  <EmployeeLink
                    id={employee.supervisor.id}
                    name={`${employee.supervisor.firstName} ${employee.supervisor.lastName}`}
                    position={employee.supervisor?.position}
                  />
                </ul>
              </ContentBlock>
            )}
            {employee.employees && employee.employees.length > 0 && (
              <ContentBlock title="Employees" icon={UserGroupIcon}>
                <ul className="space-y-3">
                  {employee.employees.map((sub) => (
                    <EmployeeLink
                      key={sub.id}
                      id={sub.id}
                      name={`${sub.firstName} ${sub.lastName}`}
                      position={sub.position}
                    />
                  ))}
                </ul>
              </ContentBlock>
            )}
          </>
        }
      >
        <ContentBlock title="Details" icon={IdentificationIcon} />
      </PageContentLayout>
    </>
  )
}
