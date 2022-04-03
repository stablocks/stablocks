import type { IncomesQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import TableLoader from 'src/ui/TableLoader'
import Table from 'src/components/Layout/Table'
import IncomeForm from '../IncomeForm'
import { formatAmount } from 'src/utils/currency'

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

const tableColumns = [{ label: 'Name' }, { label: 'Amount' }, { label: 'Date' }]

export const Loading = () => <TableLoader cols={tableColumns} />

export const Empty = () => <></>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ incomes }: CellSuccessProps<IncomesQuery>) => {
  const [isSaved, setIsSaved] = React.useState(false)
  const [updateIncome, { loading, error }] = useMutation(
    UPDATE_INCOME_MUTATION,
    {
      onCompleted: () => {
        setIsSaved(true)
        toast.success('Income updated')
      },
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateIncome({ variables: { id, input } })
  }

  const data = incomes.map((income, i) => [
    <IncomeForm
      key={i}
      popup={{ type: 'link', label: income.name }}
      onSave={onSave}
      loading={loading}
      error={error}
      isSaved={isSaved}
      income={income}
    />,
    formatAmount(income.amount, income.currency),
    new Date(income.date).toDateString(),
  ])
  return <Table cols={tableColumns} rows={data} total={incomes.length} />
}
