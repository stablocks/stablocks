import { render } from '@redwoodjs/testing/web'

import RegionSelect from './RegionSelect'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('RegionSelect', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RegionSelect />)
    }).not.toThrow()
  })
})
