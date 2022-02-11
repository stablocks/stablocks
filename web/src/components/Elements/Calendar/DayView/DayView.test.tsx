import { render } from '@redwoodjs/testing/web'

import DayView from './DayView'

describe('DayView', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DayView />)
    }).not.toThrow()
  })
})
