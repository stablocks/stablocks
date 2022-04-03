import { render } from '@redwoodjs/testing/web'

import AccountingPage from './AccountingPage'

describe('AccountingPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AccountingPage />)
    }).not.toThrow()
  })
})
