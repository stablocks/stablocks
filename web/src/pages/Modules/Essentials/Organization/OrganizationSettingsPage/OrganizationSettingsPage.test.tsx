import { render } from '@redwoodjs/testing/web'

import OrganizationSettingsPage from './OrganizationSettingsPage'

describe('OrganizationSettingsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OrganizationSettingsPage />)
    }).not.toThrow()
  })
})
