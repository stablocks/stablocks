import { render } from '@redwoodjs/testing/web'

import EditDepartmentPage from './EditDepartmentPage'

describe('EditDepartmentPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditDepartmentPage />)
    }).not.toThrow()
  })
})
