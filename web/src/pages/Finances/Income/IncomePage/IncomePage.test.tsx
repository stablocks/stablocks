import { render } from '@redwoodjs/testing/web'

import IncomePage from './IncomePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('IncomePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<IncomePage />)
    }).not.toThrow()
  })
})
