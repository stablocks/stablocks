import { render } from '@redwoodjs/testing/web'

import ChatMessage from './ChatMessage'

describe('ChatMessage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ChatMessage />)
    }).not.toThrow()
  })
})
