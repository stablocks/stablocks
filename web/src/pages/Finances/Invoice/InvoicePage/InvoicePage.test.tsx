import { render } from '@redwoodjs/testing/web'

import InvoicePage from './InvoicePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('InvoicePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InvoicePage />)
    }).not.toThrow()
  })
})
