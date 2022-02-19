import { render } from '@redwoodjs/testing/web'

import CompanyPage from './CompanyPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CompanyPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CompanyPage />)
    }).not.toThrow()
  })
})
