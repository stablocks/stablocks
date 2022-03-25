import { render } from '@redwoodjs/testing/web'

import NavLink from './NavLink'

describe('NavLink', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NavLink />)
    }).not.toThrow()
  })
})
