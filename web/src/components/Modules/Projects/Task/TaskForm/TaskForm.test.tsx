import { render } from '@redwoodjs/testing/web'

import TaskForm from './TaskForm'

describe('TaskForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TaskForm />)
    }).not.toThrow()
  })
})
