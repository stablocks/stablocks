import { render } from '@redwoodjs/testing/web'

import ProjectsPage from './ProjectsPage'

describe('ProjectsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProjectsPage />)
    }).not.toThrow()
  })
})
