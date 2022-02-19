import type { ExpensesQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import Loader from 'src/ui/Loader'

export const QUERY = gql`
  query ExpensesQuery {
    expenses {
      id
      name
      amount
      date
      authorizedDate
      currency
    }
  }
`

export const Loading = () => <Loader />

export const Empty = () => <></>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ expenses }: CellSuccessProps<ExpensesQuery>) => {
  return (
    <ul>
      {expenses.map((expense) => {
        return (
          <li key={expense.id}>
            <Link to={routes.expense({ id: expense.id })}>{expense.name}</Link>
          </li>
        )
      })}
    </ul>
  )
}
