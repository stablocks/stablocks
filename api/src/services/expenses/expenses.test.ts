import {
  expenses,
  expense,
  createExpense,
  updateExpense,
  deleteExpense,
} from './expenses'
import type { StandardScenario } from './expenses.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('expenses', () => {
  scenario('returns all expenses', async (scenario: StandardScenario) => {
    const result = await expenses()

    expect(result.length).toEqual(Object.keys(scenario.expense).length)
  })

  scenario('returns a single expense', async (scenario: StandardScenario) => {
    const result = await expense({ id: scenario.expense.one.id })

    expect(result).toEqual(scenario.expense.one)
  })

  scenario('creates a expense', async () => {
    const result = await createExpense({
      input: {
        name: 'String',
        amount: 3954899.560918408,
        date: '2022-02-21T02:09:57Z',
        updatedAt: '2022-02-21T02:09:57Z',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.amount).toEqual(3954899.560918408)
    expect(result.date).toEqual('2022-02-21T02:09:57Z')
    expect(result.updatedAt).toEqual('2022-02-21T02:09:57Z')
  })

  scenario('updates a expense', async (scenario: StandardScenario) => {
    const original = await expense({ id: scenario.expense.one.id })
    const result = await updateExpense({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a expense', async (scenario: StandardScenario) => {
    const original = await deleteExpense({ id: scenario.expense.one.id })
    const result = await expense({ id: original.id })

    expect(result).toEqual(null)
  })
})
