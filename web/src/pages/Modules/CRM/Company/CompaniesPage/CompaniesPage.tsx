import { useState } from 'react'
import { routes } from '@redwoodjs/router'
import PageTitle from 'src/components/UI/PageTitle'
import Popup from 'src/components/UI/Popup'
import NewCompany from 'src/components/Modules/CRM/Company/NewCompany'
import CompaniesCell from 'src/components/Modules/CRM/Company/CompaniesCell'
import { PlusSmIcon } from '@heroicons/react/outline'

const CompaniesPage = () => {
  const [isNewOpen, setIsNewOpen] = useState(false)

  return (
    <>
      <PageTitle
        title="Companies"
        breadcrumbs={[{ title: 'Contacts', to: routes.contacts() }]}
        search={{ label: 'companies', type: 'company' }}
        buttons={[
          {
            label: 'New Company',
            icon: PlusSmIcon,
            onClick: () => setIsNewOpen(true),
            main: true,
          },
        ]}
      />

      <Popup isOpen={isNewOpen} setIsOpen={setIsNewOpen} title="New company">
        <NewCompany setOpen={setIsNewOpen} />
      </Popup>

      <CompaniesCell />
    </>
  )
}

export default CompaniesPage
