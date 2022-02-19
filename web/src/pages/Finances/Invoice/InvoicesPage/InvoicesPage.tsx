import { useState } from 'react'
import { routes } from '@redwoodjs/router'
import PageTitle from 'src/ui/PageTitle'
import Popup from 'src/components/Elements/Popup'
import NewInvoice from 'src/components/Finance/Invoice/NewInvoice'
import InvoicesCell from 'src/components/Finance/Invoice/InvoicesCell'
import { PlusSmIcon } from '@heroicons/react/outline'

const InvoicesPage = () => {
  const [isNewOpen, setIsNewOpen] = useState(false)

  return (
    <>
      <PageTitle
        title="Invoices"
        breadcrumbs={[{ title: 'Finance', to: routes.finance() }]}
        search={{ label: 'invoices', type: 'invoice' }}
        buttons={[
          {
            label: 'New Invoice',
            icon: PlusSmIcon,
            onClick: () => setIsNewOpen(true),
            main: true,
          },
        ]}
      />

      <Popup isOpen={isNewOpen} setIsOpen={setIsNewOpen} title="New invoice">
        <NewInvoice setOpen={setIsNewOpen} />
      </Popup>

      <InvoicesCell />
    </>
  )
}

export default InvoicesPage
