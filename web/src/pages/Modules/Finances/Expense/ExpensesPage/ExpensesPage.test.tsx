import { render } from '@redwoodjs/testing/web'

import ExpensesPage from './ExpensesPage'

describe('ExpensesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ExpensesPage />)
    }).not.toThrow()
  })
})
