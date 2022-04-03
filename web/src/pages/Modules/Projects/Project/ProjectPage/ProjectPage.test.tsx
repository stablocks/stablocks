import { render } from '@redwoodjs/testing/web'

import ProjectPage from './ProjectPage'

describe('ProjectPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProjectPage />)
    }).not.toThrow()
  })
})
