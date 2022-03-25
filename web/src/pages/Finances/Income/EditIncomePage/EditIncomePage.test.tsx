import { render } from '@redwoodjs/testing/web'

import EditIncomePage from './EditIncomePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EditIncomePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditIncomePage />)
    }).not.toThrow()
  })
})
