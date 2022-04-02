import { render } from '@redwoodjs/testing/web'

import IncomesPage from './IncomesPage'

describe('IncomesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<IncomesPage />)
    }).not.toThrow()
  })
})
