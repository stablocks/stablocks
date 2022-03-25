import {
  contactNotes,
  contactNote,
  createContactNote,
  updateContactNote,
  deleteContactNote,
} from './contactNotes'
import type { StandardScenario } from './contactNotes.scenarios'

describe('contactNotes', () => {
  scenario('returns all contactNotes', async (scenario: StandardScenario) => {
    const result = await contactNotes()

    expect(result.length).toEqual(Object.keys(scenario.contactNote).length)
  })

  scenario(
    'returns a single contactNote',
    async (scenario: StandardScenario) => {
      const result = await contactNote({ id: scenario.contactNote.one.id })

      expect(result).toEqual(scenario.contactNote.one)
    }
  )

  scenario('creates a contactNote', async (scenario: StandardScenario) => {
    const result = await createContactNote({
      input: {
        message: 'String',
        contactId: scenario.contactNote.two.contactId,
        employeeId: scenario.contactNote.two.employeeId,
        updatedAt: '2022-03-23T23:02:57Z',
      },
    })

    expect(result.message).toEqual('String')
    expect(result.contactId).toEqual(scenario.contactNote.two.contactId)
    expect(result.employeeId).toEqual(scenario.contactNote.two.employeeId)
    expect(result.updatedAt).toEqual('2022-03-23T23:02:57Z')
  })

  scenario('updates a contactNote', async (scenario: StandardScenario) => {
    const original = await contactNote({ id: scenario.contactNote.one.id })
    const result = await updateContactNote({
      id: original.id,
      input: { message: 'String2' },
    })

    expect(result.message).toEqual('String2')
  })

  scenario('deletes a contactNote', async (scenario: StandardScenario) => {
    const original = await deleteContactNote({
      id: scenario.contactNote.one.id,
    })
    const result = await contactNote({ id: original.id })

    expect(result).toEqual(null)
  })
})
