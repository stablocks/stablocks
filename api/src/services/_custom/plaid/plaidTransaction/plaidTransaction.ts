import { Transaction, TransactionsGetRequest } from 'plaid'
import { client } from 'src/lib/plaid'
import { requireAuth } from 'src/lib/auth'
import { plaidItems } from 'src/services/plaidItems'
import { db } from 'src/lib/db'

export const plaidTransactions = async () => {
  requireAuth({ roles: ['admin', 'financeAdmin'] })

  const items = await plaidItems()

  if (!items || items.length === 0) throw new Error('No accounts found')

  let transactionsCount = 0

  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    const accessToken = item.accessToken

    const accountTransactions = await plaidAccountTransactions({ accessToken })

    transactionsCount += accountTransactions
  }

  return transactionsCount
}

export const plaidAccountTransactions = async ({ accessToken }) => {
  requireAuth({ roles: ['admin', 'financeAdmin'] })

  const transactions: Transaction[] = []

  const currentYear = new Date().getFullYear()
  const end_date = new Date().toISOString().split('T')[0]
  const start_date = `${currentYear - 1}-01-01`

  const request: TransactionsGetRequest = {
    access_token: accessToken,
    start_date,
    end_date,
  }

  try {
    const response = await client.transactionsGet(request)

    transactions.push(...response.data.transactions)

    const total_transactions = response.data.total_transactions
    // Manipulate the offset parameter to paginate
    // transactions and retrieve all available data
    while (transactions.length < total_transactions) {
      const paginatedRequest: TransactionsGetRequest = {
        access_token: accessToken,
        start_date,
        end_date,
        options: {
          offset: transactions.length,
        },
      }
      const paginatedResponse = await client.transactionsGet(paginatedRequest)
      transactions.push(...paginatedResponse.data.transactions)
    }
  } catch (error) {
    console.log(error)
  }

  const data = []

  for (let i = 0; i < transactions.length; i++) {
    const transaction = transactions[i]

    if (transaction.amount < 0) continue

    if (!transaction.datetime && !transaction.date) continue

    const transactionData: {
      plaidId: string
      name: string
      amount: number
      date?: string
      authorizedDate?: string
      currency: string
      pending: boolean
    } = {
      plaidId: transaction.transaction_id,
      name: transaction.name,
      amount: transaction.amount,
      date: new Date(transaction.datetime || transaction.date).toISOString(),
      currency: transaction.iso_currency_code,
      pending: transaction.pending,
    }

    if (transaction.authorized_datetime || transaction.authorized_date) {
      transactionData.authorizedDate = new Date(
        transaction.authorized_datetime || transaction.authorized_date
      ).toISOString()
    }

    data.push(transactionData)
  }

  const newTransactions = await db.expense.createMany({
    data,
    skipDuplicates: true,
  })

  return newTransactions.count
}
