import { render } from '@redwoodjs/testing/web'

import EditExpensePage from './EditExpensePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EditExpensePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditExpensePage />)
    }).not.toThrow()
  })
})
