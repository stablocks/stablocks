import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { useParams } from '@redwoodjs/router'
import ApplicationForm from '../ApplicationForm'

import { QUERY as JOB_QUERY } from '../../Job/JobCell'

const CREATE_APPLICATION_MUTATION = gql`
  mutation CreateApplicationMutation($input: CreateApplicationInput!) {
    createApplication(input: $input) {
      id
    }
  }
`

const NewApplication = (props) => {
  const { id } = useParams()
  const [createApplication, { loading, error }] = useMutation(
    CREATE_APPLICATION_MUTATION,
    {
      onCompleted: () => {
        toast.success('Application created')
        props.setOpen(false)
      },
      refetchQueries: [{ query: JOB_QUERY, variables: { id } }],
      awaitRefetchQueries: true,
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    input.jobId = id
    createApplication({ variables: { input } })
  }

  return (
    <ApplicationForm
      onSave={onSave}
      loading={loading}
      error={error}
      newForm={true}
    />
  )
}

export default NewApplication
