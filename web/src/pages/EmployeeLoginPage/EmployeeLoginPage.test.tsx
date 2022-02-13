import { render } from '@redwoodjs/testing/web'

import EmployeeLoginPage from './EmployeeLoginPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EmployeeLoginPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EmployeeLoginPage />)
    }).not.toThrow()
  })
})
