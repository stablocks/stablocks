import {
  AccountSubtype,
  CountryCode,
  LinkTokenCreateRequest,
  Products,
} from 'plaid'
import { client } from 'src/lib/plaid'
import { requireAuth } from 'src/lib/auth'
import { organization } from 'src/services/organizations'

export const plaidLinkToken = async () => {
  // requireAuth({ roles: ['admin', 'financeAdmin'] })

  const org = await organization()

  const request: LinkTokenCreateRequest = {
    user: {
      client_user_id: org.id,
    },
    client_name: 'Stablocks',
    products: [Products.Auth, Products.Transactions],
    country_codes: [CountryCode.Us],
    language: 'en',
    account_filters: {
      depository: {
        account_subtypes: [AccountSubtype.Checking, AccountSubtype.Savings],
      },
      credit: {
        account_subtypes: [AccountSubtype.CreditCard],
      },
    },
  }

  if (process.env.NODE_ENV === 'production') {
    request.webhook = `${process.env.URL}/webhooks/plaid`
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
