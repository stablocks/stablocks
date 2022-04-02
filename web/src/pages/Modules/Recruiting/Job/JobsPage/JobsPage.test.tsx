import { render } from '@redwoodjs/testing/web'

import JobsPage from './JobsPage'

describe('JobsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<JobsPage />)
    }).not.toThrow()
  })
})
