import { render } from '@redwoodjs/testing/web'

import NewEmployee from './NewEmployee'

describe('NewEmployee', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewEmployee />)
    }).not.toThrow()
  })
})
