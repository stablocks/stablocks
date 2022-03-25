import {
  taskComments,
  taskComment,
  createTaskComment,
  updateTaskComment,
  deleteTaskComment,
} from './taskComments'
import type { StandardScenario } from './taskComments.scenarios'

describe('taskComments', () => {
  scenario('returns all taskComments', async (scenario: StandardScenario) => {
    const result = await taskComments()

    expect(result.length).toEqual(Object.keys(scenario.taskComment).length)
  })

  scenario(
    'returns a single taskComment',
    async (scenario: StandardScenario) => {
      const result = await taskComment({ id: scenario.taskComment.one.id })

      expect(result).toEqual(scenario.taskComment.one)
    }
  )

  scenario('creates a taskComment', async (scenario: StandardScenario) => {
    const result = await createTaskComment({
      input: {
        message: 'String',
        taskId: scenario.taskComment.two.taskId,
        employeeId: scenario.taskComment.two.employeeId,
        updatedAt: '2022-03-23T23:04:59Z',
      },
    })

    expect(result.message).toEqual('String')
    expect(result.taskId).toEqual(scenario.taskComment.two.taskId)
    expect(result.employeeId).toEqual(scenario.taskComment.two.employeeId)
    expect(result.updatedAt).toEqual('2022-03-23T23:04:59Z')
  })

  scenario('updates a taskComment', async (scenario: StandardScenario) => {
    const original = await taskComment({ id: scenario.taskComment.one.id })
    const result = await updateTaskComment({
      id: original.id,
      input: { message: 'String2' },
    })

    expect(result.message).toEqual('String2')
  })

  scenario('deletes a taskComment', async (scenario: StandardScenario) => {
    const original = await deleteTaskComment({
      id: scenario.taskComment.one.id,
    })
    const result = await taskComment({ id: original.id })

    expect(result).toEqual(null)
  })
})
