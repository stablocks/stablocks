import { useState } from 'react'
import { routes } from '@redwoodjs/router'
import PageTitle from 'src/ui/PageTitle'
import Popup from 'src/components/Elements/Popup'
import NewIncome from 'src/components/Finance/Income/NewIncome'
import IncomesCell from 'src/components/Finance/Income/IncomesCell'
import { PlusSmIcon } from '@heroicons/react/outline'

const IncomesPage = () => {
  const [isNewOpen, setIsNewOpen] = useState(false)

  return (
    <>
      <PageTitle
        title="Income"
        breadcrumbs={[{ title: 'Finance', to: routes.finance() }]}
        search={{ label: 'income', type: 'income' }}
        buttons={[
          {
            label: 'New Income',
            icon: PlusSmIcon,
            onClick: () => setIsNewOpen(true),
            main: true,
          },
        ]}
      />

      <Popup isOpen={isNewOpen} setIsOpen={setIsNewOpen} title="New income">
        <NewIncome setOpen={setIsNewOpen} />
      </Popup>

      <IncomesCell />
    </>
  )
}

export default IncomesPage
