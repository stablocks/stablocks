import { render } from '@redwoodjs/testing/web'

import ProjectForm from './ProjectForm'

describe('ProjectForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProjectForm />)
    }).not.toThrow()
  })
})
