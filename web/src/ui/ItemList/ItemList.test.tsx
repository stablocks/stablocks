import { render } from '@redwoodjs/testing/web'

import ItemList from './ItemList'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ItemList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ItemList />)
    }).not.toThrow()
  })
})
