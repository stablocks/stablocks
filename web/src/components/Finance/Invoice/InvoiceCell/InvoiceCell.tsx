import type { FindInvoiceQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import Loader from 'src/ui/Loader'
import PageTitle from 'src/ui/PageTitle'
import { PencilAltIcon } from '@heroicons/react/outline'

export const QUERY = gql`
  query FindInvoiceQuery($id: Int!) {
    invoice(id: $id) {
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
      items {
        id
        name
        units
        rate
        description
      }
    }
  }
`

export const Loading = () => (
  <>
    <PageTitle
      title="Invoice"
      breadcrumbs={[
        { title: 'Finance', to: routes.finance() },
        { title: 'Invoices', to: routes.invoices() },
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

export const Success = ({ invoice }: CellSuccessProps<FindInvoiceQuery>) => {
  return (
    <>
      <PageTitle
        title={`Invoice #${invoice.id}`}
        currentCrumbLabel={`#${invoice.id}`}
        breadcrumbs={[
          { title: 'Finance', to: routes.finance() },
          { title: 'Invoices', to: routes.invoices() },
        ]}
        search={{ label: 'invoices', type: 'invoices' }}
        buttons={[
          {
            label: 'Edit',
            icon: PencilAltIcon,
            onClick: () => navigate(routes.editInvoice({ id: invoice.id })),
          },
        ]}
      />
      {JSON.stringify(invoice)}
    </>
  )
}
