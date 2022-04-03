import { render } from '@redwoodjs/testing/web'

import EditEmployeePage from './EditEmployeePage'

describe('EditEmployeePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditEmployeePage />)
    }).not.toThrow()
  })
})
