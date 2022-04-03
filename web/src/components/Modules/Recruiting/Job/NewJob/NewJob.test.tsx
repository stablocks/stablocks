import { render } from '@redwoodjs/testing/web'

import NewJob from './NewJob'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NewJob', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewJob />)
    }).not.toThrow()
  })
})
