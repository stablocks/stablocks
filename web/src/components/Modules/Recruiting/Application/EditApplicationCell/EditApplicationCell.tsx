import type { FindEditApplicationQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { routes } from '@redwoodjs/router'
import Loader from 'src/components/UI/Loader'
import PageTitle from 'src/components/UI/PageTitle'
import ApplicationForm from '../ApplicationForm'

export const QUERY = gql`
  query FindEditApplicationQuery($id: String!) {
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

const UPDATE_APPLICATION_MUTATION = gql`
  mutation UpdateApplicationMutation(
    $id: String!
    $input: UpdateApplicationInput!
  ) {
    updateApplication(id: $id, input: $input) {
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

export const Loading = () => (
  <>
    <PageTitle
      title={`Edit Application`}
      currentCrumbLabel="Edit"
      breadcrumbs={[
        { title: 'Jobs', to: routes.jobs() },
        {
          title: 'Job',
          to: '#',
        },
        { title: 'Applications', to: routes.applications() },
        { title: 'Application', to: '#' },
      ]}
      search={{ label: 'applications', type: 'application' }}
    />
    <Loader />
  </>
)

export const Empty = () => <></>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  application,
}: CellSuccessProps<FindEditApplicationQuery>) => {
  const [isSaved, setIsSaved] = React.useState(false)
  const [updateApplication, { loading, error }] = useMutation(
    UPDATE_APPLICATION_MUTATION,
    {
      onCompleted: () => {
        setIsSaved(true)
        toast.success('Application updated')
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateApplication({ variables: { id, input } })
  }

  return (
    <>
      <PageTitle
        title={`Edit Application`}
        currentCrumbLabel="Edit"
        breadcrumbs={[
          { title: 'Jobs', to: routes.jobs() },
          {
            title: application.job.title,
            to: routes.job({ id: application.job.id }),
          },
          { title: 'Applications', to: routes.applications() },
          { title: 'Application', to: routes.job({ id: application.id }) },
        ]}
        search={{ label: 'applications', type: 'application' }}
      />
      <ApplicationForm
        onSave={onSave}
        loading={loading}
        error={error}
        isSaved={isSaved}
        application={application}
      />
    </>
  )
}
