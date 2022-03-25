import { render } from '@redwoodjs/testing/web'

import ContentBlock from './ContentBlock'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ContentBlock', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ContentBlock />)
    }).not.toThrow()
  })
})
