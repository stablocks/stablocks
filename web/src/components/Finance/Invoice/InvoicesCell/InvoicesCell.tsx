import type { InvoicesQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import Loader from 'src/ui/Loader'

export const QUERY = gql`
  query InvoicesQuery {
    invoices {
      id
      status
      contact {
        id
        firstName
        lastName
      }
      currency
      issued
      dueDate
      paidDate
      description
    }
  }
`

export const Loading = () => <Loader />

export const Empty = () => <></>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ invoices }: CellSuccessProps<InvoicesQuery>) => {
  return (
    <ul>
      {invoices.map((invoice) => {
        return (
          <li key={invoice.id}>
            <Link
              to={routes.invoice({ id: invoice.id })}
            >{`#${invoice.id}`}</Link>
          </li>
        )
      })}
    </ul>
  )
}
