import { render } from '@redwoodjs/testing/web'

import NewCompany from './NewCompany'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NewCompany', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewCompany />)
    }).not.toThrow()
  })
})
