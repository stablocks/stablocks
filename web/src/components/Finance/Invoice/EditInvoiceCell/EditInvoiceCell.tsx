import type { FindEditInvoiceQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { routes } from '@redwoodjs/router'
import Loader from 'src/ui/Loader'
import PageTitle from 'src/ui/PageTitle'
import InvoiceForm from '../InvoiceForm'

export const QUERY = gql`
  query FindEditInvoiceQuery($id: Int!) {
    invoice(id: $id) {
      id
      currency
      issued
      dueDate
      sent
      paid
      description
    }
  }
`

const UPDATE_INVOICE_MUTATION = gql`
  mutation UpdateInvoiceMutation($id: Int!, $input: UpdateInvoiceInput!) {
    updateInvoice(id: $id, input: $input) {
      id
      currency
      issued
      dueDate
      sent
      paid
      description
    }
  }
`

export const Loading = () => (
  <>
    <PageTitle
      title={`Edit Invoice`}
      currentCrumbLabel="Edit"
      breadcrumbs={[
        { title: 'Finance', to: routes.finance() },
        {
          title: 'Invoices',
          to: routes.invoices(),
        },
        { title: 'Invoice', to: '#' },
      ]}
      search={{ label: 'invoices', type: 'invoice' }}
    />
    <Loader />
  </>
)

export const Empty = () => <></>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  invoice,
}: CellSuccessProps<FindEditInvoiceQuery>) => {
  const [isSaved, setIsSaved] = React.useState(false)
  const [updateTask, { loading, error }] = useMutation(
    UPDATE_INVOICE_MUTATION,
    {
      onCompleted: () => {
        setIsSaved(true)
        toast.success('Invoice updated')
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateTask({ variables: { id, input } })
  }

  return (
    <>
      <PageTitle
        title={`Edit Invoice`}
        currentCrumbLabel="Edit"
        breadcrumbs={[
          { title: 'Finance', to: routes.finance() },
          {
            title: 'Invoices',
            to: routes.invoices(),
          },
          { title: `#${invoice.id}`, to: routes.invoice({ id: invoice.id }) },
        ]}
        search={{ label: 'invoices', type: 'invoice' }}
      />
      <InvoiceForm
        onSave={onSave}
        loading={loading}
        error={error}
        isSaved={isSaved}
        invoice={invoice}
      />
    </>
  )
}
