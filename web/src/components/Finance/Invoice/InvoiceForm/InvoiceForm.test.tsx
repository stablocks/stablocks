import { render } from '@redwoodjs/testing/web'

import InvoiceForm from './InvoiceForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('InvoiceForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InvoiceForm />)
    }).not.toThrow()
  })
})
