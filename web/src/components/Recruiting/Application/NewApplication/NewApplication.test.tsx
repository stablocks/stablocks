import { render } from '@redwoodjs/testing/web'

import NewApplication from './NewApplication'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NewApplication', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewApplication />)
    }).not.toThrow()
  })
})
