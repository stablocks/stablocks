import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import CompanyForm from '../CompanyForm'

import { QUERY as COMPANIES_QUERY } from '../CompaniesCell'

const CREATE_COMPANY_MUTATION = gql`
  mutation CreateCompanyMutation($input: CreateCompanyInput!) {
    createCompany(input: $input) {
      id
    }
  }
`

const NewCompany = (props) => {
  const [createCompany, { loading, error }] = useMutation(
    CREATE_COMPANY_MUTATION,
    {
      onCompleted: () => {
        toast.success('Company created')
        props.setOpen(false)
      },
      refetchQueries: [{ query: COMPANIES_QUERY }],
      awaitRefetchQueries: true,
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createCompany({ variables: { input } })
  }

  return (
    <CompanyForm
      onSave={onSave}
      loading={loading}
      error={error}
      newForm={true}
    />
  )
}

export default NewCompany
