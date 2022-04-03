import { render } from '@redwoodjs/testing/web'

import CountryContext from './CountryContext'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CountryContext', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CountryContext />)
    }).not.toThrow()
  })
})
