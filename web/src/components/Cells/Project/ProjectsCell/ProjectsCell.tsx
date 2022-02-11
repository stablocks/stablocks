import type { ProjectsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import { ChevronRightIcon } from '@heroicons/react/outline'
import Loader from 'src/components/Elements/Loader'

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

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ projects }: CellSuccessProps<ProjectsQuery>) => {
  return (
    <>
      <div className="overflow-hidden border border-gray-300 bg-white sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {projects.map((project) => (
            <li key={project.id}>
              <Link
                to={routes.project({ id: project.id })}
                className="block hover:bg-gray-50"
              >
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                    <div className="truncate">
                      <div className="flex text-base">
                        <p className="truncate font-semibold text-indigo-600">
                          {project.title}
                        </p>
                      </div>
                      {project.description && (
                        <div className="mt-1 flex">
                          <div className="flex items-center text-sm text-gray-500">
                            <p>{project.description}</p>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="mt-4 flex-shrink-0 text-sm text-gray-500 sm:mt-0 sm:ml-5">
                      {project.tasks?.length} tasks
                    </div>
                  </div>
                  <div className="ml-5 flex-shrink-0">
                    <ChevronRightIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
