import { render } from '@redwoodjs/testing/web'

import EditTicketPage from './EditTicketPage'

describe('EditTicketPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditTicketPage />)
    }).not.toThrow()
  })
})
