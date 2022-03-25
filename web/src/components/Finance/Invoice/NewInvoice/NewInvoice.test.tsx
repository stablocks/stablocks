import { render } from '@redwoodjs/testing/web'

import NewInvoice from './NewInvoice'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NewInvoice', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewInvoice />)
    }).not.toThrow()
  })
})
