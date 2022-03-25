import {
  employeePays,
  employeePay,
  createEmployeePay,
  updateEmployeePay,
  deleteEmployeePay,
} from './employeePays'
import type { StandardScenario } from './employeePays.scenarios'

describe('employeePays', () => {
  scenario('returns all employeePays', async (scenario: StandardScenario) => {
    const result = await employeePays()

    expect(result.length).toEqual(Object.keys(scenario.employeePay).length)
  })

  scenario(
    'returns a single employeePay',
    async (scenario: StandardScenario) => {
      const result = await employeePay({ id: scenario.employeePay.one.id })

      expect(result).toEqual(scenario.employeePay.one)
    }
  )

  scenario('creates a employeePay', async (scenario: StandardScenario) => {
    const result = await createEmployeePay({
      input: {
        amount: 546337.821927616,
        employeeId: scenario.employeePay.two.employeeId,
        updatedAt: '2022-03-23T23:02:02Z',
      },
    })

    expect(result.amount).toEqual(546337.821927616)
    expect(result.employeeId).toEqual(scenario.employeePay.two.employeeId)
    expect(result.updatedAt).toEqual('2022-03-23T23:02:02Z')
  })

  scenario('updates a employeePay', async (scenario: StandardScenario) => {
    const original = await employeePay({ id: scenario.employeePay.one.id })
    const result = await updateEmployeePay({
      id: original.id,
      input: { amount: 6178765.516279147 },
    })

    expect(result.amount).toEqual(6178765.516279147)
  })

  scenario('deletes a employeePay', async (scenario: StandardScenario) => {
    const original = await deleteEmployeePay({
      id: scenario.employeePay.one.id,
    })
    const result = await employeePay({ id: original.id })

    expect(result).toEqual(null)
  })
})
