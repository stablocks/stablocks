import { useState } from 'react'
import type { FindEditCompanyQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { routes } from '@redwoodjs/router'
import Loader from 'src/ui/Loader'
import PageTitle from 'src/ui/PageTitle'
import CompanyForm from '../CompanyForm'

export const QUERY = gql`
  query EditCompany($id: String!) {
    company(id: $id) {
      id
      name
      website
      phone
    }
  }
`

const UPDATE_COMPANY_MUTATION = gql`
  mutation UpdateCompanyMutation($id: String!, $input: UpdateCompanyInput!) {
    updateCompany(id: $id, input: $input) {
      id
      name
      website
      phone
    }
  }
`

export const Loading = () => (
  <>
    <PageTitle
      title={`Edit Company`}
      currentCrumbLabel="Edit"
      breadcrumbs={[
        { title: 'Contacts', to: routes.contacts() },
        { title: 'Companies', to: routes.companies() },
        { title: 'Company', to: '#' },
      ]}
      search={{ label: 'companies', type: 'company' }}
    />
    <Loader />
  </>
)

export const Empty = () => <></>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  company,
}: CellSuccessProps<FindEditCompanyQuery>) => {
  const [isSaved, setIsSaved] = useState(false)
  const [updateCompany, { loading, error }] = useMutation(
    UPDATE_COMPANY_MUTATION,
    {
      onCompleted: () => {
        setIsSaved(true)
        toast.success('Company updated')
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateCompany({ variables: { id, input } })
  }

  return (
    <>
      <PageTitle
        title={`Edit Company`}
        currentCrumbLabel="Edit"
        breadcrumbs={[
          { title: 'Contacts', to: routes.contacts() },
          { title: 'Companies', to: routes.companies() },
          { title: company.name, to: routes.company({ id: company.id }) },
        ]}
        search={{ label: 'companies', type: 'company' }}
      />
      <CompanyForm
        onSave={onSave}
        loading={loading}
        error={error}
        isSaved={isSaved}
        company={company}
      />
    </>
  )
}
