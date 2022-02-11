import { render } from '@redwoodjs/testing/web'

import Calendar from './Calendar'

describe('Calendar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Calendar />)
    }).not.toThrow()
  })
})
