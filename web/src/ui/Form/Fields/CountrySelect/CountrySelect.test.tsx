import { render } from '@redwoodjs/testing/web'

import CountrySelect from './CountrySelect'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CountrySelect', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CountrySelect />)
    }).not.toThrow()
  })
})
