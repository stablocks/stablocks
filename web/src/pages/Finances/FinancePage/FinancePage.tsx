import { useState } from 'react'
import PageTitle from 'src/components/Layout/PageTitle'
import PlaidLinkCell from 'src/components/Cells/Plaid/PlaidLinkCell'
import { RiAddLine } from 'react-icons/ri'

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
