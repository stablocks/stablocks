import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { useParams } from '@redwoodjs/router'
import IncomeForm from '../IncomeForm'

import { QUERY as INCOMES_QUERY } from '../IncomesCell'

const CREATE_INCOME_MUTATION = gql`
  mutation CreateIncomeMutation($input: CreateIncomeInput!) {
    createIncome(input: $input) {
      id
    }
  }
`

const NewIncome = (props) => {
  const { id } = useParams()
  const [createIncome, { loading, error }] = useMutation(
    CREATE_INCOME_MUTATION,
    {
      onCompleted: () => {
        toast.success('Income created')
        props.setOpen(false)
      },
      refetchQueries: [{ query: INCOMES_QUERY }],
      awaitRefetchQueries: true,
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    input.projectId = id
    createIncome({ variables: { input } })
  }

  return (
    <IncomeForm
      onSave={onSave}
      loading={loading}
      error={error}
      newForm={true}
    />
  )
}

export default NewIncome
