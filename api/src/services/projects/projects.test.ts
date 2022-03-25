import {
  projects,
  project,
  createProject,
  updateProject,
  deleteProject,
} from './projects'
import type { StandardScenario } from './projects.scenarios'

describe('projects', () => {
  scenario('returns all projects', async (scenario: StandardScenario) => {
    const result = await projects()

    expect(result.length).toEqual(Object.keys(scenario.project).length)
  })

  scenario('returns a single project', async (scenario: StandardScenario) => {
    const result = await project({ id: scenario.project.one.id })

    expect(result).toEqual(scenario.project.one)
  })

  scenario('creates a project', async (scenario: StandardScenario) => {
    const result = await createProject({
      input: {
        title: 'String',
        employeeId: scenario.project.two.employeeId,
        updatedAt: '2022-03-23T23:04:39Z',
      },
    })

    expect(result.title).toEqual('String')
    expect(result.employeeId).toEqual(scenario.project.two.employeeId)
    expect(result.updatedAt).toEqual('2022-03-23T23:04:39Z')
  })

  scenario('updates a project', async (scenario: StandardScenario) => {
    const original = await project({ id: scenario.project.one.id })
    const result = await updateProject({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a project', async (scenario: StandardScenario) => {
    const original = await deleteProject({ id: scenario.project.one.id })
    const result = await project({ id: original.id })

    expect(result).toEqual(null)
  })
})
