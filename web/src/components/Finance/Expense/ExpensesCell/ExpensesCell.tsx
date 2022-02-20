import type { ExpensesQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import Loader from 'src/ui/Loader'
import Table from 'src/components/Layout/Table'
import Pagination from 'src/ui/Pagination'
import { currencies } from 'src/utils/enums'

export const beforeQuery = ({ page }) => {
  page = page ? parseInt(page, 10) : 1

  return { variables: { page } }
}

export const QUERY = gql`
  query ExpensesQuery($page: Int) {
    expenses(page: $page) {
      expenses {
        id
        name
        amount
        date
        authorizedDate
        currency
      }
      count
    }
  }
`

export const Loading = () => <Loader />

export const Empty = () => <></>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ expenses }: CellSuccessProps<ExpensesQuery>) => {
  function formatAmount(amount: number, currency: string) {
    const currencyMatch = currencies.find((c) => c.value === currency)

    return `${currencyMatch.symbol}${Number.parseFloat(
      amount.toString()
    ).toFixed(2)}`
  }

  const data = expenses.expenses.map((expense, i) => [
    <Link
      key={i}
      to={routes.expense({ id: expense.id })}
      className="font-medium text-indigo-600 hover:text-indigo-700"
    >
      {expense.name}
    </Link>,
    formatAmount(expense.amount, expense.currency),
    new Date(expense.date).toDateString(),
    <Link
      key={i}
      to={routes.expense({ id: expense.id })}
      className="text-indigo-600 hover:text-indigo-700"
    >
      View
    </Link>,
  ])

  return (
    <>
      <Table
        cols={[
          { label: 'Name' },
          { label: 'Amount' },
          { label: 'Date' },
          { label: 'View', hidden: true },
        ]}
        rows={data}
      />
      <Pagination total={expenses.count} />
    </>
  )
}
