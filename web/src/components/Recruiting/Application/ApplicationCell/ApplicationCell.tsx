import type { FindApplicationQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import Loader from 'src/ui/Loader'
import InfoImage from 'src/ui/InfoImage'
import PageTitle from 'src/ui/PageTitle'
import { PencilAltIcon } from '@heroicons/react/outline'

export const QUERY = gql`
  query FindApplicationQuery($id: String!) {
    application(id: $id) {
      id
      job {
        id
        title
      }
      user {
        id
        firstName
        lastName
      }
      status
    }
  }
`

const NonSuccessHeader = () => (
  <PageTitle
    title="Application"
    breadcrumbs={[
      { title: 'Jobs', to: routes.jobs() },
      {
        title: 'Job',
        to: '#',
      },
      { title: 'Applications', to: routes.applications() },
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
    <InfoImage type="error" message="This application could not be found" />
  </>
)

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  application,
}: CellSuccessProps<FindApplicationQuery>) => {
  return (
    <>
      <PageTitle
        title={application.job.title}
        breadcrumbs={[
          { title: 'Jobs', to: routes.jobs() },
          {
            title: application.job.title,
            to: routes.job({ id: application.job.id }),
          },
          { title: 'Applications', to: routes.applications() },
        ]}
        currentCrumbLabel="Application"
        search={{ label: 'applications', type: 'application' }}
        buttons={[
          {
            label: 'Edit',
            icon: PencilAltIcon,
            onClick: () =>
              navigate(routes.editApplication({ id: application.id })),
          },
        ]}
      />

      {JSON.stringify(application)}
    </>
  )
}
