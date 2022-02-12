import { useEffect, useState } from 'react'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { QUERY as PROVIDER_QUERY } from 'src/components/Providers/AppProviderCell'

import OrganizationForm from 'src/components/Essentials/Organization/OrganizationForm'
import Loader from 'src/components/Elements/Loader'

export const QUERY = gql`
  query EditOrganization {
    organization {
      id
      name
      website
      logo
      recruiting
      crm
      helpdesk
      projects
      updatedAt
      createdAt
    }
  }
`
const UPDATE_ORGANIZATION_MUTATION = gql`
  mutation UpdateOrganizationTwoMutation($input: UpdateOrganizationInput!) {
    updateOrganization(input: $input) {
      id
      name
      website
      logo
      recruiting
      crm
      helpdesk
      projects
      updatedAt
      createdAt
    }
  }
`

export const Loading = () => <Loader />

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ organization }: CellSuccessProps) => {
  const [isSaved, setIsSaved] = useState(false)
  const [updateOrganization, { loading, error }] = useMutation(
    UPDATE_ORGANIZATION_MUTATION,
    {
      onCompleted: () => {
        setIsSaved(true)
        toast.success('Organization updated')
      },
      refetchQueries: [{ query: PROVIDER_QUERY }, { query: QUERY }],
      awaitRefetchQueries: true,
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    updateOrganization({ variables: { input } })
  }

  useEffect(() => {
    if (isSaved) {
      setTimeout(() => {
        setIsSaved(false)
      }, 100)
    }
  }, [isSaved])

  return (
    <OrganizationForm
      organization={organization}
      onSave={onSave}
      isSaved={isSaved}
      error={error}
      loading={loading}
    />
  )
}
