import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import FirstUserForm from 'src/components/Essentials/User/FirstUserForm'

import { QUERY as USERS_QUERY } from 'src/components/AppCells/AppProviderCell'

const CREATE_USER_MUTATION = gql`
  mutation CreateFirstUserMutation($input: CreateFirstUserInput!) {
    createFirstUser(input: $input) {
      id
    }
  }
`

const NewUser = () => {
  const [createUser, { loading, error }] = useMutation(CREATE_USER_MUTATION, {
    onCompleted: () => {
      toast.success('User created')
    },
    refetchQueries: [{ query: USERS_QUERY }],
    awaitRefetchQueries: true,
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createUser({ variables: { input } })
  }

  return <FirstUserForm onSave={onSave} loading={loading} error={error} />
}

export default NewUser
