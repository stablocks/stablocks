import { jobs, job, createJob, updateJob, deleteJob } from './jobs'
import type { StandardScenario } from './jobs.scenarios'

describe('jobs', () => {
  scenario('returns all jobs', async (scenario: StandardScenario) => {
    const result = await jobs()

    expect(result.length).toEqual(Object.keys(scenario.job).length)
  })

  scenario('returns a single job', async (scenario: StandardScenario) => {
    const result = await job({ id: scenario.job.one.id })

    expect(result).toEqual(scenario.job.one)
  })

  scenario('creates a job', async (scenario: StandardScenario) => {
    const result = await createJob({
      input: {
        title: 'String',
        description: 'String',
        employeeId: scenario.job.two.employeeId,
        updatedAt: '2022-03-23T23:02:19Z',
      },
    })

    expect(result.title).toEqual('String')
    expect(result.description).toEqual('String')
    expect(result.employeeId).toEqual(scenario.job.two.employeeId)
    expect(result.updatedAt).toEqual('2022-03-23T23:02:19Z')
  })

  scenario('updates a job', async (scenario: StandardScenario) => {
    const original = await job({ id: scenario.job.one.id })
    const result = await updateJob({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a job', async (scenario: StandardScenario) => {
    const original = await deleteJob({ id: scenario.job.one.id })
    const result = await job({ id: original.id })

    expect(result).toEqual(null)
  })
})
