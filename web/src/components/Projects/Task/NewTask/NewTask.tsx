import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { useParams } from '@redwoodjs/router'
import TaskForm from '../TaskForm'

import { QUERY as PROJECT_QUERY } from '../../Project/ProjectCell'

const CREATE_TASK_MUTATION = gql`
  mutation CreateTaskMutation($input: CreateTaskInput!) {
    createTask(input: $input) {
      id
    }
  }
`

const NewTask = (props) => {
  const { id } = useParams()
  const [createTask, { loading, error }] = useMutation(CREATE_TASK_MUTATION, {
    onCompleted: () => {
      toast.success('Task created')
      props.setOpen(false)
    },
    refetchQueries: [{ query: PROJECT_QUERY, variables: { id } }],
    awaitRefetchQueries: true,
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    input.projectId = id
    createTask({ variables: { input } })
  }

  return (
    <TaskForm onSave={onSave} loading={loading} error={error} newForm={true} />
  )
}

export default NewTask
