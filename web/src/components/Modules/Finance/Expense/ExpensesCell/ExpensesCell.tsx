import type { ExpensesQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import TableLoader from 'src/components/UI/TableLoader'
import Table from 'src/components/UI/Table'
import ExpenseForm from '../ExpenseForm'
import OptionSwitch from 'src/components/UI/OptionSwitch'
import { expenseCategories } from 'src/utils/enums'
import { formatAmount } from 'src/utils/currency'

export const beforeQuery = ({ page }) => {
  page = page ? parseInt(page, 10) : 1

  return { variables: { page } }
}

export const QUERY = gql`
  query ExpensesQuery($page: Int) {
    expenses(page: $page) {
      expenses {
        id
        plaidId
        name
        amount
        date
        authorizedDate
        currency
        category {
          id
          name
          slug
        }
      }
      count
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

const tableColumns = [
  { label: 'Name' },
  { label: 'Category' },
  { label: 'Amount' },
  { label: 'Date' },
]

export const Loading = () => <TableLoader cols={tableColumns} />

export const Empty = () => <></>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ expenses }: CellSuccessProps<ExpensesQuery>) => {
  const [isSaved, setIsSaved] = React.useState(false)
  const [updateExpense, { loading, error }] = useMutation(
    UPDATE_EXPENSE_MUTATION,
    {
      onCompleted: () => {
        setIsSaved(true)
        toast.success('Expense updated')
      },
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateExpense({ variables: { id, input } })
  }

  const data = expenses.expenses.map((expense, i) => [
    !expense?.plaidId ? (
      <ExpenseForm
        key={i}
        popup={{ type: 'link', label: expense.name }}
        onSave={onSave}
        loading={loading}
        error={error}
        isSaved={isSaved}
        expense={expense}
      />
    ) : (
      <span className="block font-medium truncate max-w-[16rem] md:max-w-[24rem]">
        {expense.name}
      </span>
    ),
    <OptionSwitch
      key={i}
      id={expense.id}
      selected={expense?.category?.slug}
      unselectedLabel="Uncategorized"
      name="categorySlug"
      onSubmit={onSave}
      loading={loading}
      error={error}
      options={[
        ...expenseCategories.map((cat) => ({
          label: cat.name,
          value: cat.slug,
        })),
      ]}
    />,
    formatAmount(expense.amount, expense.currency),
    new Date(expense.date).toDateString(),
  ])

  return <Table cols={tableColumns} rows={data} total={expenses.count} />
}
