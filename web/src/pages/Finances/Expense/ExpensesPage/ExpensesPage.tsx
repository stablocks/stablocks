import { useState } from 'react'
import { routes } from '@redwoodjs/router'
import PageTitle from 'src/ui/PageTitle'
import Popup from 'src/components/Elements/Popup'
import NewExpense from 'src/components/Finance/Expense/NewExpense'
import ExpensesCell from 'src/components/Finance/Expense/ExpensesCell'
import { PlusSmIcon } from '@heroicons/react/outline'

const ExpensesPage = () => {
  const [isNewOpen, setIsNewOpen] = useState(false)

  return (
    <>
      <PageTitle
        title="Expenses"
        breadcrumbs={[{ title: 'Finance', to: routes.finance() }]}
        search={{ label: 'expenses', type: 'expense' }}
        buttons={[
          {
            label: 'New Expense',
            icon: PlusSmIcon,
            onClick: () => setIsNewOpen(true),
            main: true,
          },
        ]}
      />

      <Popup isOpen={isNewOpen} setIsOpen={setIsNewOpen} title="New expense">
        <NewExpense setOpen={setIsNewOpen} />
      </Popup>

      <ExpensesCell />
    </>
  )
}

export default ExpensesPage
