import type { IncomesQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import Loader from 'src/components/UI/Loader'

export const QUERY = gql`
  query IncomesQuery {
    incomes {
      id
      name
      amount
      date
      currency
    }
  }
`

export const Loading = () => <Loader />

export const Empty = () => <></>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ incomes }: CellSuccessProps<IncomesQuery>) => {
  return (
    <ul>
      {incomes.map((income) => {
        return (
          <li key={income.id}>
            <Link to={routes.income({ id: income.id })}>{income.name}</Link>
          </li>
        )
      })}
    </ul>
  )
}
