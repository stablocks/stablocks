import { render } from '@redwoodjs/testing/web'

import ApplicationsPage from './ApplicationsPage'

describe('ApplicationsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ApplicationsPage />)
    }).not.toThrow()
  })
})
