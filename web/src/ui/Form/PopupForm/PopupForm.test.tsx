import { render } from '@redwoodjs/testing/web'

import PopupForm from './PopupForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PopupForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PopupForm />)
    }).not.toThrow()
  })
})
