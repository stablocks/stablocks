import { render } from '@redwoodjs/testing/web'

import EmployeePage from './EmployeePage'

describe('EmployeePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EmployeePage />)
    }).not.toThrow()
  })
})
