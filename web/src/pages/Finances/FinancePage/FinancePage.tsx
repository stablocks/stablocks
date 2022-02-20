import { useState } from 'react'
import PlaidLinkCell from 'src/components/Cells/Plaid/PlaidLinkCell'
import { RiAddLine } from 'react-icons/ri'
import PageTitle from 'src/ui/PageTitle'

const FinancePage = () => {
  const [addAccount, setAddAccount] = useState(false)

  return (
    <>
      <PageTitle
        title="Finance"
        buttons={[
          {
            label: 'Add Account',
            onClick: () => setAddAccount(true),
            roles: ['admin', 'financeAdmin'],
            main: true,
            icon: RiAddLine,
          },
        ]}
      />

      {addAccount && <PlaidLinkCell setIsOpen={setAddAccount} />}
    </>
  )
}

export default FinancePage
