import { render } from '@redwoodjs/testing/web'

import FormLayout from './FormLayout'

describe('FormLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FormLayout />)
    }).not.toThrow()
  })
})
