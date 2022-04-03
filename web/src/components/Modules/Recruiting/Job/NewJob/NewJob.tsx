import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import JobForm from '../JobForm'

import { QUERY as JOBS_QUERY } from '../JobsCell'

const CREATE_JOB_MUTATION = gql`
  mutation CreateJobMutation($input: CreateJobInput!) {
    createJob(input: $input) {
      id
    }
  }
`

const NewJob = (props) => {
  const [createJob, { loading, error }] = useMutation(CREATE_JOB_MUTATION, {
    onCompleted: () => {
      toast.success('Job created')
      props.setOpen(false)
    },
    refetchQueries: [{ query: JOBS_QUERY }],
    awaitRefetchQueries: true,
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createJob({ variables: { input } })
  }

  return (
    <JobForm onSave={onSave} loading={loading} error={error} newForm={true} />
  )
}

export default NewJob
