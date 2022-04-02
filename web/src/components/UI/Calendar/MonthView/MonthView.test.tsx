import { render } from '@redwoodjs/testing/web'

import MonthView from './MonthView'

describe('MonthView', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MonthView />)
    }).not.toThrow()
  })
})
