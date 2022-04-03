import { render } from '@redwoodjs/testing/web'

import UserHeader from './UserHeader'

describe('UserHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserHeader />)
    }).not.toThrow()
  })
})
