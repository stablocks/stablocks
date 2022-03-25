import { render } from '@redwoodjs/testing/web'

import DescriptionList from './DescriptionList'

describe('DescriptionList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DescriptionList />)
    }).not.toThrow()
  })
})
