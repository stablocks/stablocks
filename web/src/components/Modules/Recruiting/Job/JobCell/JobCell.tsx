import type { FindJobQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import Loader from 'src/components/UI/Loader'
import InfoImage from 'src/components/UI/InfoImage'
import PageTitle from 'src/components/UI/PageTitle'
import Popup from 'src/components/UI/Popup'
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

const NonSuccessHeader = () => (
  <PageTitle
    title="Job"
    breadcrumbs={[{ title: 'Jobs', to: routes.jobs() }]}
    search={{ label: 'jobs', type: 'job' }}
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
    <InfoImage type="error" message="This job could not be found" />
  </>
)

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
