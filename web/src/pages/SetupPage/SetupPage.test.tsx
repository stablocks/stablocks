import { render } from '@redwoodjs/testing/web'

import SetupPage from './SetupPage'

describe('SetupPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SetupPage />)
    }).not.toThrow()
  })
})
