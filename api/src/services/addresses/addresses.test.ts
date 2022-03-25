import {
  addresses,
  address,
  createAddress,
  updateAddress,
  deleteAddress,
} from './addresses'
import type { StandardScenario } from './addresses.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('addresses', () => {
  scenario('returns all addresses', async (scenario: StandardScenario) => {
    const result = await addresses()

    expect(result.length).toEqual(Object.keys(scenario.address).length)
  })

  scenario('returns a single address', async (scenario: StandardScenario) => {
    const result = await address({ id: scenario.address.one.id })

    expect(result).toEqual(scenario.address.one)
  })

  scenario('creates a address', async () => {
    const result = await createAddress({
      input: {
        address: 'String',
        city: 'String',
        state: 'String',
        country: 'String',
        zip: 6566831,
        updatedAt: '2022-03-23T22:59:44Z',
      },
    })

    expect(result.address).toEqual('String')
    expect(result.city).toEqual('String')
    expect(result.state).toEqual('String')
    expect(result.country).toEqual('String')
    expect(result.zip).toEqual(6566831)
    expect(result.updatedAt).toEqual('2022-03-23T22:59:44Z')
  })

  scenario('updates a address', async (scenario: StandardScenario) => {
    const original = await address({ id: scenario.address.one.id })
    const result = await updateAddress({
      id: original.id,
      input: { address: 'String2' },
    })

    expect(result.address).toEqual('String2')
  })

  scenario('deletes a address', async (scenario: StandardScenario) => {
    const original = await deleteAddress({ id: scenario.address.one.id })
    const result = await address({ id: original.id })

    expect(result).toEqual(null)
  })
})
