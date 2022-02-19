import type { FindEditJobQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { routes } from '@redwoodjs/router'
import Loader from 'src/ui/Loader'
import PageTitle from 'src/ui/PageTitle'
import JobForm from '../JobForm'

export const QUERY = gql`
  query EditJob($id: String!) {
    job(id: $id) {
      id
      title
      description
    }
  }
`

const UPDATE_JOB_MUTATION = gql`
  mutation UpdateJobMutation($id: String!, $input: UpdateJobInput!) {
    updateJob(id: $id, input: $input) {
      id
      title
      description
    }
  }
`
export const Loading = () => (
  <>
    <PageTitle
      title={`Edit Job`}
      currentCrumbLabel="Edit"
      breadcrumbs={[
        { title: 'Jobs', to: routes.jobs() },
        { title: 'Job', to: '#' },
      ]}
      search={{ label: 'jobs', type: 'job' }}
    />
    <Loader />
  </>
)

export const Empty = () => <></>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ job }: CellSuccessProps<FindEditJobQuery>) => {
  const [isSaved, setIsSaved] = React.useState(false)
  const [updateJob, { loading, error }] = useMutation(UPDATE_JOB_MUTATION, {
    onCompleted: () => {
      setIsSaved(true)
      toast.success('Job updated')
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateJob({ variables: { id, input } })
  }

  return (
    <>
      <PageTitle
        title={`Edit Job`}
        currentCrumbLabel="Edit"
        breadcrumbs={[
          { title: 'Jobs', to: routes.jobs() },
          { title: job.title, to: routes.job({ id: job.id }) },
        ]}
        search={{ label: 'jobs', type: 'job' }}
      />
      <JobForm
        onSave={onSave}
        loading={loading}
        error={error}
        isSaved={isSaved}
        job={job}
      />
    </>
  )
}
