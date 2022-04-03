import { render } from '@redwoodjs/testing/web'

import ChatPage from './ChatPage'

describe('ChatPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ChatPage />)
    }).not.toThrow()
  })
})
