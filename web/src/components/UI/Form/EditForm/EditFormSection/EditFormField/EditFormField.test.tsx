import { render } from '@redwoodjs/testing/web'

import EditFormField from './EditFormField'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EditFormField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditFormField />)
    }).not.toThrow()
  })
})
