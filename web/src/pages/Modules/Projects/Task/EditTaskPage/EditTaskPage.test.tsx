import { render } from '@redwoodjs/testing/web'

import EditTaskPage from './EditTaskPage'

describe('EditTaskPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditTaskPage />)
    }).not.toThrow()
  })
})
