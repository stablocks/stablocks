import { useState } from 'react'
import type { FindProjectQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, navigate, routes } from '@redwoodjs/router'
import Loader from 'src/components/Elements/Loader'
import PageTitle from 'src/components/Layout/PageTitle'
import Popup from 'src/components/Elements/Popup'
import NewTask from 'src/components/NewComponents/NewTask'
import { PencilAltIcon, PlusSmIcon } from '@heroicons/react/outline'

export const QUERY = gql`
  query FindProjectQuery($id: String!) {
    project(id: $id) {
      id
      title
      description
      tasks {
        id
        title
        description
        status
      }
    }
  }
`

export const Loading = () => (
  <>
    <PageTitle
      title="Project"
      breadcrumbs={[{ title: 'Projects', to: routes.projects() }]}
      search={{ label: 'projects', type: 'project' }}
    />
    <Loader />
  </>
)

export const Empty = () => <></>

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
            roles: ['admin', 'projectsAdmin'],
          },
          {
            label: 'New Task',
            icon: PlusSmIcon,
            onClick: () => setIsNewOpen(true),
            main: true,
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
