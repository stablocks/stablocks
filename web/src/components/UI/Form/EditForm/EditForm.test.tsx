import { render } from '@redwoodjs/testing/web'

import EditForm from './EditForm'

describe('EditForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditForm />)
    }).not.toThrow()
  })
})
