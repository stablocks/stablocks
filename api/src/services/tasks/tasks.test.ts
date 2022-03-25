import { tasks, task, createTask, updateTask, deleteTask } from './tasks'
import type { StandardScenario } from './tasks.scenarios'

describe('tasks', () => {
  scenario('returns all tasks', async (scenario: StandardScenario) => {
    const result = await tasks()

    expect(result.length).toEqual(Object.keys(scenario.task).length)
  })

  scenario('returns a single task', async (scenario: StandardScenario) => {
    const result = await task({ id: scenario.task.one.id })

    expect(result).toEqual(scenario.task.one)
  })

  scenario('creates a task', async (scenario: StandardScenario) => {
    const result = await createTask({
      input: {
        title: 'String',
        projectId: scenario.task.two.projectId,
        employeeId: scenario.task.two.employeeId,
        updatedAt: '2022-03-23T23:04:50Z',
      },
    })

    expect(result.title).toEqual('String')
    expect(result.projectId).toEqual(scenario.task.two.projectId)
    expect(result.employeeId).toEqual(scenario.task.two.employeeId)
    expect(result.updatedAt).toEqual('2022-03-23T23:04:50Z')
  })

  scenario('updates a task', async (scenario: StandardScenario) => {
    const original = await task({ id: scenario.task.one.id })
    const result = await updateTask({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a task', async (scenario: StandardScenario) => {
    const original = await deleteTask({ id: scenario.task.one.id })
    const result = await task({ id: original.id })

    expect(result).toEqual(null)
  })
})
