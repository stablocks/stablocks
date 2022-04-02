import { render } from '@redwoodjs/testing/web'

import WeekView from './WeekView'

describe('WeekView', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WeekView />)
    }).not.toThrow()
  })
})
