import { useState } from 'react'
import type { FindEditEmployeeQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { routes } from '@redwoodjs/router'
import Loader from 'src/ui/Loader'
import PageTitle from 'src/ui/PageTitle'
import EmployeeForm from 'src/components/Forms/EmployeeForm'

export const QUERY = gql`
  query EditEmployee($id: String!) {
    employee(id: $id) {
      id
      firstName
      middleName
      lastName
      email
      profileImage
      position
      supervisorId
      resume
    }
  }
`

const UPDATE_EMPLOYEE_MUTATION = gql`
  mutation UpdateEmployeeMutation($id: String!, $input: UpdateEmployeeInput!) {
    updateEmployee(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => (
  <>
    <PageTitle
      title={`Edit Employee`}
      currentCrumbLabel="Edit"
      breadcrumbs={[
        { title: 'Organization', to: routes.organization() },
        { title: 'Employees', to: routes.employees() },
        { title: 'Employee', to: '#' },
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

export const Success = ({
  employee,
}: CellSuccessProps<FindEditEmployeeQuery>) => {
  const [isSaved, setIsSaved] = useState(false)
  const [updateEmployee, { loading, error }] = useMutation(
    UPDATE_EMPLOYEE_MUTATION,
    {
      onCompleted: () => {
        setIsSaved(true)
        toast.success('Employee updated')
      },
      refetchQueries: [{ query: QUERY, variables: { id: employee.id } }],
      awaitRefetchQueries: true,
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateEmployee({ variables: { id, input } })
  }

  const fullName = `${employee.firstName} ${employee.lastName}`

  return (
    <>
      <PageTitle
        title={`Edit Employee`}
        currentCrumbLabel="Edit"
        breadcrumbs={[
          { title: 'Organization', to: routes.organization() },
          { title: 'Employees', to: routes.employees() },
          { title: `${fullName}`, to: routes.employee({ id: employee.id }) },
        ]}
        search={{ label: 'employees', type: 'employee' }}
      />
      <EmployeeForm
        onSave={onSave}
        loading={loading}
        error={error}
        isSaved={isSaved}
        employee={employee}
      />
    </>
  )
}
