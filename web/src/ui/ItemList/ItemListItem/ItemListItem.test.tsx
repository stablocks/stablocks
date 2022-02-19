import { render } from '@redwoodjs/testing/web'

import ItemListItem from './ItemListItem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ItemListItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ItemListItem />)
    }).not.toThrow()
  })
})
