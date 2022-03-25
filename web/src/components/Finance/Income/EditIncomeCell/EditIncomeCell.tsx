import type { FindEditIncomeQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { routes } from '@redwoodjs/router'
import Loader from 'src/ui/Loader'
import PageTitle from 'src/ui/PageTitle'
import IncomeForm from '../IncomeForm'

export const QUERY = gql`
  query FindEditIncomeQuery($id: String!) {
    income(id: $id) {
      id
      name
      amount
      date
      currency
      invoice {
        id
        status
      }
    }
  }
`

const UPDATE_INCOME_MUTATION = gql`
  mutation UpdateIncomeMutation($id: String!, $input: UpdateIncomeInput!) {
    updateIncome(id: $id, input: $input) {
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
      title={`Edit Income`}
      currentCrumbLabel="Edit"
      breadcrumbs={[
        { title: 'Finance', to: routes.helpdesk() },
        {
          title: 'Income',
          to: routes.incomes(),
        },
        { title: 'Income', to: '#' },
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

export const Success = ({ income }: CellSuccessProps<FindEditIncomeQuery>) => {
  const [isSaved, setIsSaved] = React.useState(false)
  const [updateTask, { loading, error }] = useMutation(UPDATE_INCOME_MUTATION, {
    onCompleted: () => {
      setIsSaved(true)
      toast.success('Income updated')
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateTask({ variables: { id, input } })
  }

  return (
    <>
      <PageTitle
        title={`Edit Income`}
        currentCrumbLabel="Edit"
        breadcrumbs={[
          { title: 'Helpdesk', to: routes.helpdesk() },
          {
            title: 'Income',
            to: routes.incomes(),
          },
          { title: income.name, to: routes.income({ id: income.id }) },
        ]}
        search={{ label: 'incomes', type: 'income' }}
      />
      <IncomeForm
        onSave={onSave}
        loading={loading}
        error={error}
        isSaved={isSaved}
        income={income}
      />
    </>
  )
}
