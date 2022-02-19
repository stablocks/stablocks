import { render } from '@redwoodjs/testing/web'

import ApplicationPage from './ApplicationPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ApplicationPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ApplicationPage />)
    }).not.toThrow()
  })
})
