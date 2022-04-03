import { useState } from 'react'
import { routes } from '@redwoodjs/router'
import PageTitle from 'src/components/UI/PageTitle'
import Popup from 'src/components/UI/Popup'
import NewInvoice from 'src/components/Modules/Finance/Invoice/NewInvoice'
import InvoicesCell from 'src/components/Modules/Finance/Invoice/InvoicesCell'
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
