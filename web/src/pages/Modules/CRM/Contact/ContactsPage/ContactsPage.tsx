import { useState } from 'react'
import { usePermissions } from 'src/utils/permissions'
import PageTitle from 'src/components/UI/PageTitle'
import Popup from 'src/components/UI/Popup'
import NewContact from 'src/components/Modules/CRM/Contact/NewContact'
import ContactsCell from 'src/components/Modules/CRM/Contact/ContactsCell'
import { PlusSmIcon } from '@heroicons/react/outline'

const ContactsPage = () => {
  const [isNewOpen, setIsNewOpen] = useState(false)

  return (
    <>
      <PageTitle
        title="Contacts"
        search={{ label: 'contacts', type: 'contact' }}
        buttons={[
          {
            label: 'New Contact',
            icon: PlusSmIcon,
            onClick: () => setIsNewOpen(true),
            main: true,
            authorized: usePermissions(['admin', 'crmAdmin', 'crm']),
          },
        ]}
      />

      <Popup isOpen={isNewOpen} setIsOpen={setIsNewOpen} title="New contact">
        <NewContact setOpen={setIsNewOpen} />
      </Popup>

      <ContactsCell />
    </>
  )
}

export default ContactsPage
