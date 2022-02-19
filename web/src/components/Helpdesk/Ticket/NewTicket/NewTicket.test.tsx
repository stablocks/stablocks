import { render } from '@redwoodjs/testing/web'

import NewTicket from './NewTicket'

describe('NewTicket', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewTicket />)
    }).not.toThrow()
  })
})
