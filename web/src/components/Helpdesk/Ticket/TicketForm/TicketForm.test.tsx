import { render } from '@redwoodjs/testing/web'

import TicketForm from './TicketForm'

describe('TicketForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TicketForm />)
    }).not.toThrow()
  })
})
