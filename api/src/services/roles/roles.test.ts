import { roles, role, createRole, updateRole, deleteRole } from './roles'
import type { StandardScenario } from './roles.scenarios'

describe('roles', () => {
  scenario('returns all roles', async (scenario: StandardScenario) => {
    const result = await roles()

    expect(result.length).toEqual(Object.keys(scenario.role).length)
  })

  scenario('returns a single role', async (scenario: StandardScenario) => {
    const result = await role({ id: scenario.role.one.id })

    expect(result).toEqual(scenario.role.one)
  })

  scenario('creates a role', async (scenario: StandardScenario) => {
    const result = await createRole({
      input: {
        employeeId: scenario.role.two.employeeId,
        updatedAt: '2022-03-23T23:05:11Z',
      },
    })

    expect(result.employeeId).toEqual(scenario.role.two.employeeId)
    expect(result.updatedAt).toEqual('2022-03-23T23:05:11Z')
  })

  scenario('updates a role', async (scenario: StandardScenario) => {
    const original = await role({ id: scenario.role.one.id })
    const result = await updateRole({
      id: original.id,
      input: { updatedAt: '2022-03-24T23:05:11Z' },
    })

    expect(result.updatedAt).toEqual('2022-03-24T23:05:11Z')
  })

  scenario('deletes a role', async (scenario: StandardScenario) => {
    const original = await deleteRole({ id: scenario.role.one.id })
    const result = await role({ id: original.id })

    expect(result).toEqual(null)
  })
})
