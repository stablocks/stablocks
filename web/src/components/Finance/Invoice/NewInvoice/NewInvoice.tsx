import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { useParams } from '@redwoodjs/router'
import InvoiceForm from '../InvoiceForm'

import { QUERY as INVOICES_QUERY } from '../InvoicesCell'

const CREATE_INVOICE_MUTATION = gql`
  mutation CreateInvoiceMutation($input: CreateInvoiceInput!) {
    createInvoice(input: $input) {
      id
    }
  }
`

const NewInvoice = (props) => {
  const { id } = useParams()
  const [createInvoice, { loading, error }] = useMutation(
    CREATE_INVOICE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Invoice created')
        props.setOpen(false)
      },
      refetchQueries: [{ query: INVOICES_QUERY }],
      awaitRefetchQueries: true,
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    input.projectId = id
    createInvoice({ variables: { input } })
  }

  return (
    <InvoiceForm
      onSave={onSave}
      loading={loading}
      error={error}
      newForm={true}
    />
  )
}

export default NewInvoice
