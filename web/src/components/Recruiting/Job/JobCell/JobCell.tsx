import type { FindJobQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, navigate, routes } from '@redwoodjs/router'
import Loader from 'src/ui/Loader'
import PageTitle from 'src/ui/PageTitle'
import Popup from 'src/components/Elements/Popup'
import NewApplication from '../../Application/NewApplication'
import { PencilAltIcon, PlusSmIcon } from '@heroicons/react/outline'

export const QUERY = gql`
  query FindJobQuery($id: String!) {
    job(id: $id) {
      id
      title
      description
    }
  }
`

export const Loading = () => (
  <>
    <PageTitle
      title="Job"
      breadcrumbs={[{ title: 'Jobs', to: routes.jobs() }]}
      search={{ label: 'jobs', type: 'job' }}
    />
    <Loader />
  </>
)

export const Empty = () => <></>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ job }: CellSuccessProps<FindJobQuery>) => {
  const [isNewOpen, setIsNewOpen] = React.useState(false)

  return (
    <>
      <PageTitle
        title={job.title}
        breadcrumbs={[{ title: 'Jobs', to: routes.jobs() }]}
        search={{ label: 'jobs', type: 'job' }}
        buttons={[
          {
            label: 'Edit',
            icon: PencilAltIcon,
            onClick: () => navigate(routes.editJob({ id: job.id })),
            roles: ['admin', 'recruitingAdmin'],
          },
          {
            label: 'New Application',
            icon: PlusSmIcon,
            onClick: () => setIsNewOpen(true),
            main: true,
          },
        ]}
      />

      <Popup isOpen={isNewOpen} setIsOpen={setIsNewOpen} title="New task">
        <NewApplication setOpen={setIsNewOpen} />
      </Popup>

      <div>{JSON.stringify(job)}</div>
    </>
  )
}
