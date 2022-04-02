import { render } from '@redwoodjs/testing/web'

import CalendarHeader from './CalendarHeader'

describe('CalendarHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CalendarHeader />)
    }).not.toThrow()
  })
})
