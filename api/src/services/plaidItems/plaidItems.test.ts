import {
  plaidItems,
  plaidItem,
  createPlaidItem,
  updatePlaidItem,
  deletePlaidItem,
} from './plaidItems'
import type { StandardScenario } from './plaidItems.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('plaidItems', () => {
  scenario('returns all plaidItems', async (scenario: StandardScenario) => {
    const result = await plaidItems()

    expect(result.length).toEqual(Object.keys(scenario.plaidItem).length)
  })

  scenario('returns a single plaidItem', async (scenario: StandardScenario) => {
    const result = await plaidItem({ id: scenario.plaidItem.one.id })

    expect(result).toEqual(scenario.plaidItem.one)
  })

  scenario('creates a plaidItem', async () => {
    const result = await createPlaidItem({
      input: {
        id: 'String',
        accessToken: 'String8156686',
        itemId: 'String6408844',
      },
    })

    expect(result.id).toEqual('String')
    expect(result.accessToken).toEqual('String8156686')
    expect(result.itemId).toEqual('String6408844')
  })

  scenario('updates a plaidItem', async (scenario: StandardScenario) => {
    const original = await plaidItem({ id: scenario.plaidItem.one.id })
    const result = await updatePlaidItem({
      id: original.id,
      input: { id: 'String2' },
    })

    expect(result.id).toEqual('String2')
  })

  scenario('deletes a plaidItem', async (scenario: StandardScenario) => {
    const original = await deletePlaidItem({ id: scenario.plaidItem.one.id })
    const result = await plaidItem({ id: original.id })

    expect(result).toEqual(null)
  })
})
