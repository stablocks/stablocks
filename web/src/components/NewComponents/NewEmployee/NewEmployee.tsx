import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import EmployeeForm from 'src/components/Forms/EmployeeForm'

import { QUERY as EMPLOYEES_QUERY } from 'src/components/Cells/Employee/EmployeesCell'

const CREATE_EMPLOYEE_MUTATION = gql`
  mutation CreateEmployeeMutation($input: CreateEmployeeInput!) {
    createEmployee(input: $input) {
      id
    }
  }
`

const NewEmployee = (props) => {
  const [createEmployee, { loading, error }] = useMutation(
    CREATE_EMPLOYEE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Employee created')
        props.setOpen(false)
      },
      refetchQueries: [{ query: EMPLOYEES_QUERY }],
      awaitRefetchQueries: true,
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createEmployee({ variables: { input } })
  }

  return (
    <EmployeeForm
      onSave={onSave}
      loading={loading}
      error={error}
      newForm={true}
    />
  )
}

export default NewEmployee
