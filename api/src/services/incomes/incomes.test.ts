import {
  incomes,
  income,
  createIncome,
  updateIncome,
  deleteIncome,
} from './incomes'
import type { StandardScenario } from './incomes.scenarios'

describe('incomes', () => {
  scenario('returns all incomes', async (scenario: StandardScenario) => {
    const result = await incomes()

    expect(result.length).toEqual(Object.keys(scenario.income).length)
  })

  scenario('returns a single income', async (scenario: StandardScenario) => {
    const result = await income({ id: scenario.income.one.id })

    expect(result).toEqual(scenario.income.one)
  })

  scenario('creates a income', async () => {
    const result = await createIncome({
      input: {
        name: 'String',
        amount: 410731.27956389845,
        date: '2022-03-23T23:00:53Z',
        currency: 'String',
        updatedAt: '2022-03-23T23:00:53Z',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.amount).toEqual(410731.27956389845)
    expect(result.date).toEqual('2022-03-23T23:00:53Z')
    expect(result.currency).toEqual('String')
    expect(result.updatedAt).toEqual('2022-03-23T23:00:53Z')
  })

  scenario('updates a income', async (scenario: StandardScenario) => {
    const original = await income({ id: scenario.income.one.id })
    const result = await updateIncome({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a income', async (scenario: StandardScenario) => {
    const original = await deleteIncome({ id: scenario.income.one.id })
    const result = await income({ id: original.id })

    expect(result).toEqual(null)
  })
})
