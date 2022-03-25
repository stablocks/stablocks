import { render } from '@redwoodjs/testing/web'

import EditFormSection from './EditFormSection'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EditFormSection', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditFormSection />)
    }).not.toThrow()
  })
})
