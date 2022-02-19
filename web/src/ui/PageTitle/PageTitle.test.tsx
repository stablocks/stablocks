import { render } from '@redwoodjs/testing/web'

import PageTitle from './PageTitle'

describe('PageTitle', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PageTitle />)
    }).not.toThrow()
  })
})
