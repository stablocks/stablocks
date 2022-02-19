import { render } from '@redwoodjs/testing/web'

import EditCompanyPage from './EditCompanyPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EditCompanyPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditCompanyPage />)
    }).not.toThrow()
  })
})
