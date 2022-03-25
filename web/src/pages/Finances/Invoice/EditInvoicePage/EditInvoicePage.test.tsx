import { render } from '@redwoodjs/testing/web'

import EditInvoicePage from './EditInvoicePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EditInvoicePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditInvoicePage />)
    }).not.toThrow()
  })
})
