import type { FindEditDepartmentQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { routes } from '@redwoodjs/router'
import Loader from 'src/components/UI/Loader'
import PageTitle from 'src/components/UI/PageTitle'
import DepartmentForm from '../DepartmentForm'

export const QUERY = gql`
  query FindEditDepartmentQuery($id: String!) {
    department(id: $id) {
      id
      name
      email
    }
  }
`

const UPDATE_DEPARTMENT_MUTATION = gql`
  mutation UpdateDepartmentMutation(
    $id: String!
    $input: UpdateDepartmentInput!
  ) {
    updateDepartment(id: $id, input: $input) {
      id
      name
      email
    }
  }
`

export const Loading = () => (
  <>
    <PageTitle
      title={`Edit Department`}
      currentCrumbLabel="Edit"
      breadcrumbs={[
        { title: 'Organization', to: routes.organization() },
        { title: 'Departments', to: routes.departments() },
        { title: 'Department', to: '#' },
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
}: CellSuccessProps<FindEditDepartmentQuery>) => {
  const [isSaved, setIsSaved] = React.useState(false)
  const [updateDepartment, { loading, error }] = useMutation(
    UPDATE_DEPARTMENT_MUTATION,
    {
      onCompleted: () => {
        setIsSaved(true)
        toast.success('Department updated')
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateDepartment({ variables: { id, input } })
  }

  return (
    <>
      <PageTitle
        title={`Edit Department`}
        currentCrumbLabel="Edit"
        breadcrumbs={[
          { title: 'Organization', to: routes.organization() },
          { title: 'Departments', to: routes.departments() },
          { title: 'Department', to: routes.department({ id: department.id }) },
        ]}
        search={{ label: 'departments', type: 'department' }}
      />
      <DepartmentForm
        onSave={onSave}
        loading={loading}
        error={error}
        isSaved={isSaved}
        department={department}
      />
    </>
  )
}
