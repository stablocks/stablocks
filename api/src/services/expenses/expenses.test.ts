import {
  expenses,
  expense,
  createExpense,
  updateExpense,
  deleteExpense,
} from './expenses'
import type { StandardScenario } from './expenses.scenarios'

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
        amount: 7419158.737360685,
        date: '2022-03-23T23:01:37Z',
        updatedAt: '2022-03-23T23:01:37Z',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.amount).toEqual(7419158.737360685)
    expect(result.date).toEqual('2022-03-23T23:01:37Z')
    expect(result.updatedAt).toEqual('2022-03-23T23:01:37Z')
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
