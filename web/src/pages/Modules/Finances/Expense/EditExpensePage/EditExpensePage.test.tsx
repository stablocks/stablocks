import { render } from '@redwoodjs/testing/web'

import OptionSwitch from './OptionSwitch'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('OptionSwitch', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OptionSwitch />)
    }).not.toThrow()
  })
})
