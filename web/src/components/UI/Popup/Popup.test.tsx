import { render } from '@redwoodjs/testing/web'

import Popup from './Popup'

describe('Popup', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Popup />)
    }).not.toThrow()
  })
})
