import {
  companies,
  company,
  createCompany,
  updateCompany,
  deleteCompany,
} from './companies'
import type { StandardScenario } from './companies.scenarios'

describe('companies', () => {
  scenario('returns all companies', async (scenario: StandardScenario) => {
    const result = await companies()

    expect(result.length).toEqual(Object.keys(scenario.company).length)
  })

  scenario('returns a single company', async (scenario: StandardScenario) => {
    const result = await company({ id: scenario.company.one.id })

    expect(result).toEqual(scenario.company.one)
  })

  scenario('creates a company', async (scenario: StandardScenario) => {
    const result = await createCompany({
      input: {
        name: 'String',
        employeeId: scenario.company.two.employeeId,
        updatedAt: '2022-03-23T23:03:10Z',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.employeeId).toEqual(scenario.company.two.employeeId)
    expect(result.updatedAt).toEqual('2022-03-23T23:03:10Z')
  })

  scenario('updates a company', async (scenario: StandardScenario) => {
    const original = await company({ id: scenario.company.one.id })
    const result = await updateCompany({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a company', async (scenario: StandardScenario) => {
    const original = await deleteCompany({ id: scenario.company.one.id })
    const result = await company({ id: original.id })

    expect(result).toEqual(null)
  })
})
