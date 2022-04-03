import { render } from '@redwoodjs/testing/web'

import ConditionalWrapper from './ConditionalWrapper'

describe('ConditionalWrapper', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ConditionalWrapper />)
    }).not.toThrow()
  })
})
