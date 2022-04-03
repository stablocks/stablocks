import { render } from '@redwoodjs/testing/web'

import DepartmentForm from './DepartmentForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DepartmentForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DepartmentForm />)
    }).not.toThrow()
  })
})
