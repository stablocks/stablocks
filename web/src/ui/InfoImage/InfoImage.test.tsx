import { render } from '@redwoodjs/testing/web'

import InfoImage from './InfoImage'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('InfoImage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InfoImage />)
    }).not.toThrow()
  })
})
