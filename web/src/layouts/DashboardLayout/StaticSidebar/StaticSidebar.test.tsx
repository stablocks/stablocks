import { render } from '@redwoodjs/testing/web'

import StaticSidebar from './StaticSidebar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StaticSidebar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StaticSidebar />)
    }).not.toThrow()
  })
})
