import { render } from '@redwoodjs/testing/web'

import EmployeeRolesPage from './EmployeeRolesPage'

describe('EmployeeRolesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EmployeeRolesPage />)
    }).not.toThrow()
  })
})
