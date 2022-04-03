import { render } from '@redwoodjs/testing/web'

import ApplicationForm from './ApplicationForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ApplicationForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ApplicationForm />)
    }).not.toThrow()
  })
})
