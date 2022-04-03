import { render } from '@redwoodjs/testing/web'

import TicketsPage from './TicketsPage'

describe('TicketsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TicketsPage />)
    }).not.toThrow()
  })
})
