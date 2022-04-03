import type { FindPlaidTokenExchangeQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Redirect, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query FindPlaidTokenExchangeQuery($publicToken: String!) {
    transactions: plaidTokenExchange(publicToken: $publicToken)
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  transactions,
}: CellSuccessProps<FindPlaidTokenExchangeQuery>) => {
  React.useEffect(() => {
    toast.success(
      `${transactions} new transaction${transactions !== 1 ? 's' : ''} added`
    )
  }, [])

  return <Redirect to={routes.expenses()} />
}
