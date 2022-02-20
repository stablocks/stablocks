import {
  CountryCode,
  CreditAccountSubtype,
  DepositoryAccountSubtype,
  LinkTokenCreateRequest,
  Products,
} from 'plaid'
import { client } from 'src/lib/plaid'
import { requireAuth } from 'src/lib/auth'

export const plaidLinkToken = async () => {
  requireAuth({ roles: ['admin', 'financeAdmin'] })

  const request: LinkTokenCreateRequest = {
    user: {
      client_user_id: context.currentUser.id.toString(),
    },
    client_name: 'Stablocks',
    products: [Products.Auth, Products.Transactions],
    country_codes: [CountryCode.Us],
    language: 'en',
    account_filters: {
      depository: {
        account_subtypes: [
          DepositoryAccountSubtype.Checking,
          DepositoryAccountSubtype.Savings,
        ],
      },
      credit: {
        account_subtypes: [CreditAccountSubtype.CreditCard],
      },
    },
  }

  if (process.env.NODE_ENV === 'production') {
    request.webhook = `${process.env.URL}/.netlify/functions/plaid`
    request.redirect_uri = `${process.env.URL}/finance`
  }

  try {
    const response = await client.linkTokenCreate(request)
    const data = response.data
    return data.link_token
  } catch (error) {
    console.log(error)
  }

  return ''
}
