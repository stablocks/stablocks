import type { FindTaskQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import Loader from 'src/ui/Loader'
import InfoImage from 'src/ui/InfoImage'
import PageTitle from 'src/ui/PageTitle'
import { PencilAltIcon } from '@heroicons/react/outline'

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
        ]}
      />

      {JSON.stringify(task)}
    </>
  )
}
