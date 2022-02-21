import { render } from '@redwoodjs/testing/web'

import TableLoader from './TableLoader'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TableLoader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TableLoader />)
    }).not.toThrow()
  })
})
