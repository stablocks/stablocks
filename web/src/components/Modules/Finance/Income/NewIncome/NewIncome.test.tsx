import { render } from '@redwoodjs/testing/web'

import NewIncome from './NewIncome'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NewIncome', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewIncome />)
    }).not.toThrow()
  })
})
