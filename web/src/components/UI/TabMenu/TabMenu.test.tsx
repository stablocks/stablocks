import { render } from '@redwoodjs/testing/web'

import TabMenu from './TabMenu'

describe('TabMenu', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TabMenu />)
    }).not.toThrow()
  })
})
