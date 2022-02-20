import { ItemPublicTokenExchangeRequest } from 'plaid'
import { client } from 'src/lib/plaid'
import { requireAuth } from 'src/lib/auth'
import { db } from 'src/lib/db'
import { createPlaidItem } from 'src/services/plaidItems'
import { plaidAccountTransactions } from 'src/services/_custom/plaid/plaidTransaction'

export const plaidTokenExchange = async ({ publicToken }) => {
  requireAuth({ roles: ['admin', 'financeAdmin'] })

  const request: ItemPublicTokenExchangeRequest = {
    public_token: publicToken,
  }

  try {
    const response = await client.itemPublicTokenExchange(request)
    const accessToken = response.data.access_token
    const itemId = response.data.item_id

    const existingItem = await db.plaidItem.findUnique({
      where: {
        itemId,
      },
    })

    if (!existingItem) {
      await createPlaidItem({
        input: {
          accessToken,
          itemId,
        },
      })
    }

    return plaidAccountTransactions({ accessToken })
  } catch (error) {
    console.log(error)
  }

  return []
}
