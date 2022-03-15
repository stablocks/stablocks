import type { FindTaskQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes, useParams } from '@redwoodjs/router'
import Loader from 'src/ui/Loader'
import InfoImage from 'src/ui/InfoImage'
import PageTitle from 'src/ui/PageTitle'
import { PencilAltIcon } from '@heroicons/react/outline'
import { statuses } from 'src/utils/enums'

export const QUERY = gql`
  query FindTaskQuery($id: String!) {
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

const UPDATE_TASK_STATUS_MUTATION = gql`
  mutation UpdateTaskStatusMutation($id: String!, $input: UpdateTaskInput!) {
    updateTask(id: $id, input: $input) {
      id
      status
    }
  }
`

const NonSuccessHeader = () => (
  <PageTitle
    title="Task"
    breadcrumbs={[
      { title: 'Projects', to: routes.projects() },
      {
        title: 'Project',
        to: '#',
      },
      { title: 'Tasks', to: routes.tasks() },
    ]}
    search={{ label: 'tasks', type: 'task' }}
  />
)

export const Loading = () => (
  <>
    <NonSuccessHeader />
    <Loader />
  </>
)

export const Empty = () => (
  <>
    <NonSuccessHeader />
    <InfoImage type="error" message="This task could not be found" />
  </>
)

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ task }: CellSuccessProps<FindTaskQuery>) => {
  const { id } = useParams()

  const [updateTask, { loading }] = useMutation(UPDATE_TASK_STATUS_MUTATION, {
    onCompleted: () => {
      toast.success('Task status updated')
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const label = statuses.find((status) => status.value === task.status).label

  const onStatusChange = (value: string) => {
    if (value !== task.status) {
      updateTask({ variables: { id, input: { status: value } } })
    }
  }
  return (
    <>
      <PageTitle
        title={task.title}
        breadcrumbs={[
          { title: 'Projects', to: routes.projects() },
          {
            title: task.project.title,
            to: routes.project({ id: task.project.id }),
          },
          { title: 'Tasks', to: routes.tasks() },
        ]}
        search={{ label: 'tasks', type: 'task' }}
        buttons={[
          {
            label: 'Edit',
            icon: PencilAltIcon,
            onClick: () => navigate(routes.editTask({ id: task.id })),
          },
          {
            label,
            main: true,
            disabled: loading,
            children: [
              ...statuses.map((status) => {
                return {
                  label: status.label,
                  onClick: () => onStatusChange(status.value),
                }
              }),
            ],
          },
        ]}
      />

      {JSON.stringify(task)}
    </>
  )
}
