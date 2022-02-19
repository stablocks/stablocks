import type { FindEditExpenseQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { routes } from '@redwoodjs/router'
import Loader from 'src/ui/Loader'
import PageTitle from 'src/ui/PageTitle'
import ExpenseForm from '../ExpenseForm'

export const QUERY = gql`
  query FindEditExpenseQuery($id: String!) {
    expense(id: $id) {
      id
      name
      amount
      date
      authorizedDate
      currency
    }
  }
`

const UPDATE_EXPENSE_MUTATION = gql`
  mutation UpdateExpenseMutation($id: String!, $input: UpdateExpenseInput!) {
    updateExpense(id: $id, input: $input) {
      id
      name
      amount
      date
      authorizedDate
      currency
    }
  }
`

export const Loading = () => (
  <>
    <PageTitle
      title={`Edit Expense`}
      currentCrumbLabel="Edit"
      breadcrumbs={[
        { title: 'Finance', to: routes.finance() },
        {
          title: 'Expenses',
          to: routes.expenses(),
        },
        { title: 'Expense', to: '#' },
      ]}
      search={{ label: 'expenses', type: 'expense' }}
    />
    <Loader />
  </>
)

export const Empty = () => <></>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  expense,
}: CellSuccessProps<FindEditExpenseQuery>) => {
  const [isSaved, setIsSaved] = React.useState(false)
  const [updateTask, { loading, error }] = useMutation(
    UPDATE_EXPENSE_MUTATION,
    {
      onCompleted: () => {
        setIsSaved(true)
        toast.success('Expense updated')
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateTask({ variables: { id, input } })
  }

  return (
    <>
      <PageTitle
        title={`Edit Expense`}
        currentCrumbLabel="Edit"
        breadcrumbs={[
          { title: 'Finance', to: routes.finance() },
          {
            title: 'Expenses',
            to: routes.expenses(),
          },
          { title: expense.name, to: routes.expense({ id: expense.id }) },
        ]}
        search={{ label: 'expenses', type: 'expense' }}
      />
      <ExpenseForm
        onSave={onSave}
        loading={loading}
        error={error}
        isSaved={isSaved}
        expense={expense}
      />
    </>
  )
}
