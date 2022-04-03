import { render } from '@redwoodjs/testing/web'

import CompanyForm from './CompanyForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CompanyForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CompanyForm />)
    }).not.toThrow()
  })
})
