import { render } from '@redwoodjs/testing/web'

import DepartmentPage from './DepartmentPage'

describe('DepartmentPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DepartmentPage />)
    }).not.toThrow()
  })
})
