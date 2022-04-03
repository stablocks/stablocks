import { render } from '@redwoodjs/testing/web'

import Form from './Form'

describe('Form', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Form />)
    }).not.toThrow()
  })
})
