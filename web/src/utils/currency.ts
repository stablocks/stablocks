import { currencies } from './enums'

export function formatAmount(amount: number, currency: string) {
  const currencyMatch = currencies.find((c) => c.value === currency)

  return `${currencyMatch.symbol}${Number.parseFloat(amount.toString()).toFixed(
    2
  )}`
}
