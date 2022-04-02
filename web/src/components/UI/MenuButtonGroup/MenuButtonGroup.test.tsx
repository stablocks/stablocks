import { render } from '@redwoodjs/testing/web'

import MenuButtonGroup from './MenuButtonGroup'

describe('MenuButtonGroup', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MenuButtonGroup />)
    }).not.toThrow()
  })
})
