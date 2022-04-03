import { render } from '@redwoodjs/testing/web'

import EditProjectPage from './EditProjectPage'

describe('EditProjectPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditProjectPage />)
    }).not.toThrow()
  })
})
