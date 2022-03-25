import { useState } from 'react'
import { routes } from '@redwoodjs/router'
import PageTitle from 'src/ui/PageTitle'
import Popup from 'src/components/Elements/Popup'
import NewCompany from 'src/components/CRM/Company/NewCompany'
import CompaniesCell from 'src/components/CRM/Company/CompaniesCell'
import { usePermissions } from 'src/utils/permissions'
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
            authorized: usePermissions(['admin', 'crmAdmin', 'crm']),
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
