import { render } from '@redwoodjs/testing/web'

import FileUpload from './FileUpload'

describe('FileUpload', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FileUpload />)
    }).not.toThrow()
  })
})
