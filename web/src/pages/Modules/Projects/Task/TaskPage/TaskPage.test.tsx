import { render } from '@redwoodjs/testing/web'

import TaskPage from './TaskPage'

describe('TaskPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TaskPage />)
    }).not.toThrow()
  })
})
