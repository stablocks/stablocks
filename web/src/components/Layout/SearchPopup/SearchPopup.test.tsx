import { render } from '@redwoodjs/testing/web'

import SearchPopup from './SearchPopup'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SearchPopup', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SearchPopup />)
    }).not.toThrow()
  })
})
