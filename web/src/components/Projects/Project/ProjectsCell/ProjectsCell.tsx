import type { ProjectsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { routes } from '@redwoodjs/router'
import Loader from 'src/ui/Loader'
import ItemList from 'src/ui/ItemList'
import ItemListItem from 'src/ui/ItemList/ItemListItem'

export const QUERY = gql`
  query ProjectsQuery {
    projects {
      id
      title
      description
      tasks {
        id
      }
    }
  }
`

export const Loading = () => <Loader />

export const Empty = () => <></>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ projects }: CellSuccessProps<ProjectsQuery>) => {
  return (
    <>
      <ItemList>
        {projects.map((project) => (
          <ItemListItem
            key={project.id}
            title={project.title}
            description={project.description}
            to={routes.project({ id: project.id })}
            subItems={
              project?.tasks?.length
                ? {
                    count: project.tasks.length,
                    title: 'tasks',
                    singularTitle: 'task',
                  }
                : undefined
            }
          />
        ))}
      </ItemList>
    </>
  )
}
