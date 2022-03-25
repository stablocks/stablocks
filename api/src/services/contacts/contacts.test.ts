import {
  contacts,
  contact,
  createContact,
  updateContact,
  deleteContact,
} from './contacts'
import type { StandardScenario } from './contacts.scenarios'

describe('contacts', () => {
  scenario('returns all contacts', async (scenario: StandardScenario) => {
    const result = await contacts()

    expect(result.length).toEqual(Object.keys(scenario.contact).length)
  })

  scenario('returns a single contact', async (scenario: StandardScenario) => {
    const result = await contact({ id: scenario.contact.one.id })

    expect(result).toEqual(scenario.contact.one)
  })

  scenario('creates a contact', async (scenario: StandardScenario) => {
    const result = await createContact({
      input: {
        employeeId: scenario.contact.two.employeeId,
        updatedAt: '2022-03-23T23:12:54Z',
      },
    })

    expect(result.employeeId).toEqual(scenario.contact.two.employeeId)
    expect(result.updatedAt).toEqual('2022-03-23T23:12:54Z')
  })

  scenario('updates a contact', async (scenario: StandardScenario) => {
    const original = await contact({ id: scenario.contact.one.id })
    const result = await updateContact({
      id: original.id,
      input: { updatedAt: '2022-03-24T23:12:54Z' },
    })

    expect(result.updatedAt).toEqual('2022-03-24T23:12:54Z')
  })

  scenario('deletes a contact', async (scenario: StandardScenario) => {
    const original = await deleteContact({ id: scenario.contact.one.id })
    const result = await contact({ id: original.id })

    expect(result).toEqual(null)
  })
})
