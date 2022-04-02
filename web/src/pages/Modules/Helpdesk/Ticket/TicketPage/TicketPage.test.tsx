import { render } from '@redwoodjs/testing/web'

import TicketPage from './TicketPage'

describe('TicketPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TicketPage />)
    }).not.toThrow()
  })
})
