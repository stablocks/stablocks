import { render } from '@redwoodjs/testing/web'

import PhotoUpload from './PhotoUpload'

describe('PhotoUpload', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PhotoUpload />)
    }).not.toThrow()
  })
})
