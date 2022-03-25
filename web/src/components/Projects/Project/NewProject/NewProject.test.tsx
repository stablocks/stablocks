import { render } from '@redwoodjs/testing/web'

import NewProject from './NewProject'

describe('NewProject', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewProject />)
    }).not.toThrow()
  })
})
