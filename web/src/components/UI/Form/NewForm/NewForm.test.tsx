import { render } from '@redwoodjs/testing/web'

import NewForm from './NewForm'

describe('NewForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewForm />)
    }).not.toThrow()
  })
})
