import { useState } from 'react'
import type { FindProjectQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, navigate, routes } from '@redwoodjs/router'
import Loader from 'src/components/UI/Loader'
import InfoImage from 'src/components/UI/InfoImage'
import PageTitle from 'src/components/UI/PageTitle'
import Popup from 'src/components/UI/Popup'
import NewTask from '../../Task/NewTask'
import { usePermissions } from 'src/utils/permissions'
import { PencilAltIcon, PlusSmIcon } from '@heroicons/react/outline'

export const QUERY = gql`
  query FindProjectQuery($id: String!) {
    project(id: $id) {
      id
      title
      description
      employeeId
      tasks {
        id
        title
        description
        status
      }
    }
  }
`

const NonSuccessHeader = () => (
  <PageTitle
    title="Project"
    breadcrumbs={[{ title: 'Projects', to: routes.projects() }]}
    search={{ label: 'projects', type: 'project' }}
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
    <InfoImage type="error" message="This project could not be found" />
  </>
)

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ project }: CellSuccessProps<FindProjectQuery>) => {
  const [isNewOpen, setIsNewOpen] = useState(false)

  return (
    <>
      <PageTitle
        title={project.title}
        breadcrumbs={[{ title: 'Projects', to: routes.projects() }]}
        search={{ label: 'projects', type: 'project' }}
        buttons={[
          {
            label: 'Edit',
            icon: PencilAltIcon,
            onClick: () => navigate(routes.editProject({ id: project.id })),
            authorized: usePermissions(
              ['admin', 'projectsAdmin'],
              project.userId
            ),
          },
          {
            label: 'New Task',
            icon: PlusSmIcon,
            onClick: () => setIsNewOpen(true),
            main: true,
            authorized: usePermissions(['admin', 'projectsAdmin', 'projects']),
          },
        ]}
      />

      <Popup isOpen={isNewOpen} setIsOpen={setIsNewOpen} title="New task">
        <NewTask setOpen={setIsNewOpen} />
      </Popup>

      <ul>
        {project.tasks.map((task) => (
          <li key={task.id}>
            <Link to={routes.task({ id: task.id })}>{task.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
