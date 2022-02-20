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
        plaidId: 'String6665797',
        name: 'String',
        amount: 2876306.549708818,
        date: '2022-02-20T13:05:20Z',
        updatedAt: '2022-02-20T13:05:20Z',
      },
    })

    expect(result.plaidId).toEqual('String6665797')
    expect(result.name).toEqual('String')
    expect(result.amount).toEqual(2876306.549708818)
    expect(result.date).toEqual('2022-02-20T13:05:20Z')
    expect(result.updatedAt).toEqual('2022-02-20T13:05:20Z')
  })

  scenario('updates a expense', async (scenario: StandardScenario) => {
    const original = await expense({ id: scenario.expense.one.id })
    const result = await updateExpense({
      id: original.id,
      input: { plaidId: 'String5656272' },
    })

    expect(result.plaidId).toEqual('String5656272')
  })

  scenario('deletes a expense', async (scenario: StandardScenario) => {
    const original = await deleteExpense({ id: scenario.expense.one.id })
    const result = await expense({ id: original.id })

    expect(result).toEqual(null)
  })
})
