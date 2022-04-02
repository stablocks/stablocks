import { render } from '@redwoodjs/testing/web'

import EmployeeForm from './EmployeeForm'

describe('EmployeeForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EmployeeForm />)
    }).not.toThrow()
  })
})
