import { render } from '@redwoodjs/testing/web'

import InvoicesPage from './InvoicesPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('InvoicesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InvoicesPage />)
    }).not.toThrow()
  })
})
