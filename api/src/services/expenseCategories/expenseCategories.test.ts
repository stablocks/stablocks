import {
  expenseCategories,
  expenseCategory,
  createExpenseCategory,
  updateExpenseCategory,
  deleteExpenseCategory,
} from './expenseCategories'
import type { StandardScenario } from './expenseCategories.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('expenseCategories', () => {
  scenario(
    'returns all expenseCategories',
    async (scenario: StandardScenario) => {
      const result = await expenseCategories()

      expect(result.length).toEqual(
        Object.keys(scenario.expenseCategory).length
      )
    }
  )

  scenario(
    'returns a single expenseCategory',
    async (scenario: StandardScenario) => {
      const result = await expenseCategory({
        id: scenario.expenseCategory.one.id,
      })

      expect(result).toEqual(scenario.expenseCategory.one)
    }
  )

  scenario('creates a expenseCategory', async () => {
    const result = await createExpenseCategory({
      input: {
        name: 'String',
        slug: 'String9710810',
        updatedAt: '2022-02-20T17:21:23Z',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.slug).toEqual('String9710810')
    expect(result.updatedAt).toEqual('2022-02-20T17:21:23Z')
  })

  scenario('updates a expenseCategory', async (scenario: StandardScenario) => {
    const original = await expenseCategory({
      id: scenario.expenseCategory.one.id,
    })
    const result = await updateExpenseCategory({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a expenseCategory', async (scenario: StandardScenario) => {
    const original = await deleteExpenseCategory({
      id: scenario.expenseCategory.one.id,
    })
    const result = await expenseCategory({ id: original.id })

    expect(result).toEqual(null)
  })
})
