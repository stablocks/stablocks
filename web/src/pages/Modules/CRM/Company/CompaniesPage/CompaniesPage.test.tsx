import { render } from '@redwoodjs/testing/web'

import CompaniesPage from './CompaniesPage'

describe('CompaniesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CompaniesPage />)
    }).not.toThrow()
  })
})
