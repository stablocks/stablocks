import { useState } from 'react'
import type { FindEditOrganizationQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { routes } from '@redwoodjs/router'
import Loader from 'src/components/Elements/Loader'
import PageTitle from 'src/components/Layout/PageTitle'
import OrganizationForm from 'src/components/Forms/OrganizationForm'

export const QUERY = gql`
  query FindEditOrganizationQuery {
    organization {
      id
      name
      website
      logo
      email
      address
      addressTwo
      city
      state
      zipCode
      finance
      crm
      marketing
      sales
      hr
      recruiting
      helpdesk
      projects
      chatGreeting
    }
  }
`

const UPDATE_ORGANIZATION_MUTATION = gql`
  mutation UpdateOrganizationMutation($input: UpdateOrganizationInput!) {
    updateOrganization(input: $input) {
      id
    }
  }
`

export const Loading = () => (
  <>
    <PageTitle
      title="Organization Settings"
      currentCrumbLabel="Settings"
      breadcrumbs={[{ title: 'Organization', to: routes.organization() }]}
      search={{ label: 'employees', type: 'employee' }}
    />
    <Loader />
  </>
)

export const Empty = () => <></>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  organization,
}: CellSuccessProps<FindEditOrganizationQuery>) => {
  const [isSaved, setIsSaved] = useState(false)
  const [updateOrganization, { loading, error }] = useMutation(
    UPDATE_ORGANIZATION_MUTATION,
    {
      onCompleted: () => {
        setIsSaved(true)
        toast.success('Organization updated')
      },
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    updateOrganization({ variables: { input } })
  }

  return (
    <>
      <PageTitle
        title="Organization Settings"
        currentCrumbLabel="Settings"
        breadcrumbs={[{ title: 'Organization', to: routes.organization() }]}
        search={{ label: 'the organization', type: 'organization' }}
      />
      <OrganizationForm
        onSave={onSave}
        loading={loading}
        error={error}
        isSaved={isSaved}
        organization={organization}
      />
    </>
  )
}
