import { render } from '@redwoodjs/testing/web'

import NewTask from './NewTask'

describe('NewTask', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewTask />)
    }).not.toThrow()
  })
})
