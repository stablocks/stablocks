import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import DepartmentForm from '../DepartmentForm'

import { QUERY as DEPARTMENTS_QUERY } from '../DepartmentsCell'

const CREATE_DEPARTMENT_MUTATION = gql`
  mutation CreateDepartmentMutation($input: CreateDepartmentInput!) {
    createDepartment(input: $input) {
      id
    }
  }
`

const NewDepartment = (props) => {
  const [createDepartment, { loading, error }] = useMutation(
    CREATE_DEPARTMENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Department created')
        props.setOpen(false)
      },
      refetchQueries: [{ query: DEPARTMENTS_QUERY }],
      awaitRefetchQueries: true,
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createDepartment({ variables: { input } })
  }

  return (
    <DepartmentForm
      onSave={onSave}
      loading={loading}
      error={error}
      newForm={true}
    />
  )
}

export default NewDepartment
