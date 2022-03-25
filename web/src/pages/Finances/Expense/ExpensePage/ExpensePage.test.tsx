import { render } from '@redwoodjs/testing/web'

import ExpensePage from './ExpensePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ExpensePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ExpensePage />)
    }).not.toThrow()
  })
})
