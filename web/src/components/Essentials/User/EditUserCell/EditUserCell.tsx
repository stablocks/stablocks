import type { EditUserById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import UserForm from 'src/components/Essentials/User/UserForm'
import Loader from 'src/ui/Loader'

export const QUERY = gql`
  query EditUserById($id: String!) {
    user(id: $id) {
      id
      firstName
      middleName
      lastName
      email
      profileImage
      resume
      updatedAt
      createdAt
    }
  }
`
const UPDATE_USER_MUTATION = gql`
  mutation UpdateUserMutation($id: String!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
      firstName
      middleName
      lastName
      email
      profileImage
      resume
      updatedAt
      createdAt
    }
  }
`

export const Loading = () => <Loader />

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ user }: CellSuccessProps<EditUserById>) => {
  const [updateUser, { loading, error }] = useMutation(UPDATE_USER_MUTATION, {
    onCompleted: () => {
      toast.success('User updated')
      navigate(routes.employees())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateUser({ variables: { id, input } })
  }

  return (
    <UserForm user={user} onSave={onSave} error={error} loading={loading} />
  )
}
