import {
  incomes,
  income,
  createIncome,
  updateIncome,
  deleteIncome,
} from './incomes'
import type { StandardScenario } from './incomes.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

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
        amount: 4682952.215464067,
        date: '2022-02-20T13:04:47Z',
        currency: 'String',
        updatedAt: '2022-02-20T13:04:47Z',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.amount).toEqual(4682952.215464067)
    expect(result.date).toEqual('2022-02-20T13:04:47Z')
    expect(result.currency).toEqual('String')
    expect(result.updatedAt).toEqual('2022-02-20T13:04:47Z')
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
