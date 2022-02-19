import { render } from '@redwoodjs/testing/web'

import NewExpense from './NewExpense'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NewExpense', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewExpense />)
    }).not.toThrow()
  })
})
