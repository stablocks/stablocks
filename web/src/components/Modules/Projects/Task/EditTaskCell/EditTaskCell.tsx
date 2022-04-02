import { useState } from 'react'
import type { EditTask } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { routes } from '@redwoodjs/router'
import Loader from 'src/components/UI/Loader'
import PageTitle from 'src/components/UI/PageTitle'
import TaskForm from '../TaskForm'

export const QUERY = gql`
  query EditTask($id: String!) {
    task(id: $id) {
      id
      title
      description
      status
      project {
        id
        title
        description
      }
    }
  }
`

const UPDATE_TASK_MUTATION = gql`
  mutation UpdateTaskMutation($id: String!, $input: UpdateTaskInput!) {
    updateTask(id: $id, input: $input) {
      id
      title
      description
    }
  }
`

export const Loading = () => (
  <>
    <PageTitle
      title={`Edit Task`}
      currentCrumbLabel="Edit"
      breadcrumbs={[
        { title: 'Projects', to: routes.projects() },
        {
          title: 'Project',
          to: '#',
        },
        { title: 'Tasks', to: routes.tasks() },
        { title: 'Task', to: '#' },
      ]}
      search={{ label: 'tasks', type: 'task' }}
    />
    <Loader />
  </>
)

export const Empty = () => <></>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ task }: CellSuccessProps<EditTask>) => {
  const [isSaved, setIsSaved] = useState(false)
  const [updateTask, { loading, error }] = useMutation(UPDATE_TASK_MUTATION, {
    onCompleted: () => {
      setIsSaved(true)
      toast.success('Task updated')
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateTask({ variables: { id, input } })
  }

  return (
    <>
      <PageTitle
        title={`Edit Task`}
        currentCrumbLabel="Edit"
        breadcrumbs={[
          { title: 'Projects', to: routes.projects() },
          {
            title: task.project.title,
            to: routes.project({ id: task.project.id }),
          },
          { title: 'Tasks', to: routes.tasks() },
          { title: task.title, to: routes.project({ id: task.id }) },
        ]}
        search={{ label: 'tasks', type: 'task' }}
      />
      <TaskForm
        onSave={onSave}
        loading={loading}
        error={error}
        isSaved={isSaved}
        task={task}
      />
    </>
  )
}
