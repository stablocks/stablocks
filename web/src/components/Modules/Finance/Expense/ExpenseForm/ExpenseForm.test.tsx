import { render } from '@redwoodjs/testing/web'

import ExpenseForm from './ExpenseForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ExpenseForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ExpenseForm />)
    }).not.toThrow()
  })
})
