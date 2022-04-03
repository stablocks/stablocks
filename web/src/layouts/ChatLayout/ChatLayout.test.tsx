import { render } from '@redwoodjs/testing/web'

import ChatLayout from './ChatLayout'

describe('ChatLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ChatLayout />)
    }).not.toThrow()
  })
})
