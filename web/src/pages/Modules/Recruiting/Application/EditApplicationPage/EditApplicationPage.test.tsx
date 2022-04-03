import { render } from '@redwoodjs/testing/web'

import EditApplicationPage from './EditApplicationPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EditApplicationPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditApplicationPage />)
    }).not.toThrow()
  })
})
