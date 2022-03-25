import { render } from '@redwoodjs/testing/web'

import RedirectProvider from './RedirectProvider'

describe('RedirectProvider', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RedirectProvider />)
    }).not.toThrow()
  })
})
