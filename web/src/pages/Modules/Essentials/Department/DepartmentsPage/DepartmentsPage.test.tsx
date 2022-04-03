import { render } from '@redwoodjs/testing/web'

import DepartmentsPage from './DepartmentsPage'

describe('DepartmentsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DepartmentsPage />)
    }).not.toThrow()
  })
})
