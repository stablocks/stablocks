import { render } from '@redwoodjs/testing/web'

import PageContentLayout from './PageContentLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PageContentLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PageContentLayout />)
    }).not.toThrow()
  })
})
