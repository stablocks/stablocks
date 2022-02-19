import { render } from '@redwoodjs/testing/web'

import MobileSidebar from './MobileSidebar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MobileSidebar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MobileSidebar />)
    }).not.toThrow()
  })
})
