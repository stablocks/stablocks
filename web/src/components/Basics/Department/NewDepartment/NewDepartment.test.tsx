import { render } from '@redwoodjs/testing/web'

import NewDepartment from './NewDepartment'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NewDepartment', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewDepartment />)
    }).not.toThrow()
  })
})
