import {
  employeeInfos,
  employeeInfo,
  createEmployeeInfo,
  updateEmployeeInfo,
  deleteEmployeeInfo,
} from './employeeInfos'
import type { StandardScenario } from './employeeInfos.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('employeeInfos', () => {
  scenario('returns all employeeInfos', async (scenario: StandardScenario) => {
    const result = await employeeInfos()

    expect(result.length).toEqual(Object.keys(scenario.employeeInfo).length)
  })

  scenario(
    'returns a single employeeInfo',
    async (scenario: StandardScenario) => {
      const result = await employeeInfo({ id: scenario.employeeInfo.one.id })

      expect(result).toEqual(scenario.employeeInfo.one)
    }
  )

  scenario('creates a employeeInfo', async (scenario: StandardScenario) => {
    const result = await createEmployeeInfo({
      input: {
        userId: scenario.employeeInfo.two.userId,
        updatedAt: '2022-03-23T23:59:18Z',
      },
    })

    expect(result.userId).toEqual(scenario.employeeInfo.two.userId)
    expect(result.updatedAt).toEqual('2022-03-23T23:59:18Z')
  })

  scenario('updates a employeeInfo', async (scenario: StandardScenario) => {
    const original = await employeeInfo({ id: scenario.employeeInfo.one.id })
    const result = await updateEmployeeInfo({
      id: original.id,
      input: { updatedAt: '2022-03-24T23:59:18Z' },
    })

    expect(result.updatedAt).toEqual('2022-03-24T23:59:18Z')
  })

  scenario('deletes a employeeInfo', async (scenario: StandardScenario) => {
    const original = await deleteEmployeeInfo({
      id: scenario.employeeInfo.one.id,
    })
    const result = await employeeInfo({ id: original.id })

    expect(result).toEqual(null)
  })
})
