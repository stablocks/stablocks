import type { JobsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import Loader from 'src/components/UI/Loader'
import InfoImage from 'src/components/UI/InfoImage'
import ItemList from 'src/components/UI/ItemList'
import ItemListItem from 'src/components/UI/ItemList/ItemListItem'
import Table from 'src/components/UI/Table'

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

export const Empty = () => <InfoImage type="empty" message="No jobs yet" />

export const Failure = ({ error }: CellFailureProps) => (
  <InfoImage type="error" message={`${error}`} />
)

export const Success = ({ jobs }: CellSuccessProps<JobsQuery>) => {
  const data = jobs.map((job, i) => [
    <Link
      key={i}
      to={routes.job({ id: job.id })}
      className="font-medium text-indigo-600 hover:text-indigo-700"
    >
      {job.title}
    </Link>,
    <span key={i} className="text-gray-600">
      {`${job?.applications?.length}`}
    </span>,
  ])

  return (
    <Table cols={[{ label: 'Title' }, { label: 'Applications' }]} rows={data} />
  )
}
