import { Configuration, PlaidApi, PlaidEnvironments } from 'plaid'

const PLAID_ENV =
  process.env.PLAID_ENV || process.env.NODE_ENV === 'production'
    ? 'production'
    : 'development'

const configuration = new Configuration({
  basePath: PlaidEnvironments[PLAID_ENV],
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID,
      'PLAID-SECRET': process.env.PLAID_SECRET,
      'Plaid-Version': '2020-09-14',
    },
  },
})

export const client = new PlaidApi(configuration)
