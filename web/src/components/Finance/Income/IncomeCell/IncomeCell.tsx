import type { FindIncomeQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import Loader from 'src/ui/Loader'
import PageTitle from 'src/ui/PageTitle'
import { PencilAltIcon } from '@heroicons/react/outline'

export const QUERY = gql`
  query FindIncomeQuery($id: String!) {
    income(id: $id) {
      id
      name
      amount
      date
      currency
    }
  }
`

export const Loading = () => (
  <>
    <PageTitle
      title="Income"
      breadcrumbs={[
        { title: 'Finance', to: routes.finance() },
        { title: 'Income', to: routes.incomes() },
      ]}
      search={{ label: 'income', type: 'income' }}
    />
    <Loader />
  </>
)

export const Empty = () => <></>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ income }: CellSuccessProps<FindIncomeQuery>) => {
  return (
    <>
      <PageTitle
        title={income.name}
        breadcrumbs={[
          { title: 'Finance', to: routes.finance() },
          { title: 'Income', to: routes.incomes() },
        ]}
        search={{ label: 'income', type: 'income' }}
        buttons={[
          {
            label: 'Edit',
            icon: PencilAltIcon,
            onClick: () => navigate(routes.editIncome({ id: income.id })),
          },
        ]}
      />
      {JSON.stringify(income)}
    </>
  )
}
