import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { useParams } from '@redwoodjs/router'
import ExpenseForm from '../ExpenseForm'

import { QUERY as EXPENSES_QUERY } from '../ExpensesCell'

const CREATE_EXPENSE_MUTATION = gql`
  mutation CreateExpenseMutation($input: CreateExpenseInput!) {
    createExpense(input: $input) {
      id
    }
  }
`

const NewExpense = (props) => {
  const { id } = useParams()
  const [createExpense, { loading, error }] = useMutation(
    CREATE_EXPENSE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Expense created')
        props.setOpen(false)
      },
      refetchQueries: [{ query: EXPENSES_QUERY }],
      awaitRefetchQueries: true,
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    input.projectId = id
    createExpense({ variables: { input } })
  }

  return (
    <ExpenseForm
      onSave={onSave}
      loading={loading}
      error={error}
      newForm={true}
    />
  )
}

export default NewExpense
