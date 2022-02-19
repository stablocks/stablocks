import type { JobsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { routes } from '@redwoodjs/router'
import Loader from 'src/ui/Loader'
import ItemList from 'src/ui/ItemList'
import ItemListItem from 'src/ui/ItemList/ItemListItem'

export const QUERY = gql`
  query JobsQuery {
    jobs {
      id
      title
      description
      applications {
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

export const Success = ({ jobs }: CellSuccessProps<JobsQuery>) => {
  return (
    <ItemList>
      {jobs.map((job) => (
        <ItemListItem
          key={job.id}
          title={job.title}
          description={job.description}
          to={routes.job({ id: job.id })}
          subItems={
            job?.applications?.length
              ? {
                  count: job.applications.length,
                  title: 'applications',
                  singularTitle: 'application',
                }
              : undefined
          }
        />
      ))}
    </ItemList>
  )
}
