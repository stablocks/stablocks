import {
  invoiceItems,
  invoiceItem,
  createInvoiceItem,
  updateInvoiceItem,
  deleteInvoiceItem,
} from './invoiceItems'
import type { StandardScenario } from './invoiceItems.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('invoiceItems', () => {
  scenario('returns all invoiceItems', async (scenario: StandardScenario) => {
    const result = await invoiceItems()

    expect(result.length).toEqual(Object.keys(scenario.invoiceItem).length)
  })

  scenario(
    'returns a single invoiceItem',
    async (scenario: StandardScenario) => {
      const result = await invoiceItem({ id: scenario.invoiceItem.one.id })

      expect(result).toEqual(scenario.invoiceItem.one)
    }
  )

  scenario('creates a invoiceItem', async (scenario: StandardScenario) => {
    const result = await createInvoiceItem({
      input: {
        name: 'String',
        units: 1854951,
        rate: 4944805.334233752,
        invoiceId: scenario.invoiceItem.two.invoiceId,
        updatedAt: '2022-03-23T23:01:25Z',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.units).toEqual(1854951)
    expect(result.rate).toEqual(4944805.334233752)
    expect(result.invoiceId).toEqual(scenario.invoiceItem.two.invoiceId)
    expect(result.updatedAt).toEqual('2022-03-23T23:01:25Z')
  })

  scenario('updates a invoiceItem', async (scenario: StandardScenario) => {
    const original = await invoiceItem({ id: scenario.invoiceItem.one.id })
    const result = await updateInvoiceItem({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a invoiceItem', async (scenario: StandardScenario) => {
    const original = await deleteInvoiceItem({
      id: scenario.invoiceItem.one.id,
    })
    const result = await invoiceItem({ id: original.id })

    expect(result).toEqual(null)
  })
})
