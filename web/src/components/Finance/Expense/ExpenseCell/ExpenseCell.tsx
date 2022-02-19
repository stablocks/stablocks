import type { FindExpenseQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import Loader from 'src/ui/Loader'
import PageTitle from 'src/ui/PageTitle'
import { PencilAltIcon } from '@heroicons/react/outline'

export const QUERY = gql`
  query FindExpenseQuery($id: String!) {
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

export const Loading = () => (
  <>
    <PageTitle
      title="Expense"
      breadcrumbs={[
        { title: 'Finance', to: routes.finance() },
        { title: 'Expenses', to: routes.expenses() },
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

export const Success = ({ expense }: CellSuccessProps<FindExpenseQuery>) => {
  return (
    <>
      <PageTitle
        title={expense.name}
        breadcrumbs={[
          { title: 'Finance', to: routes.finance() },
          { title: 'Expenses', to: routes.expenses() },
        ]}
        search={{ label: 'expenses', type: 'expense' }}
        buttons={[
          {
            label: 'Edit',
            icon: PencilAltIcon,
            onClick: () => navigate(routes.editExpense({ id: expense.id })),
          },
        ]}
      />
      {JSON.stringify(expense)}
    </>
  )
}
