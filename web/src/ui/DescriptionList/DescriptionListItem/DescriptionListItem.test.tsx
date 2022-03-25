import { render } from '@redwoodjs/testing/web'

import DescriptionListItem from './DescriptionListItem'

describe('DescriptionListItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DescriptionListItem />)
    }).not.toThrow()
  })
})
