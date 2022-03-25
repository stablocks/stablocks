import { render } from '@redwoodjs/testing/web'

import OrganizationForm from './OrganizationForm'

describe('OrganizationForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OrganizationForm />)
    }).not.toThrow()
  })
})
