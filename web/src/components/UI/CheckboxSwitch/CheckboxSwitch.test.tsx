import { render } from '@redwoodjs/testing/web'

import CheckboxSwitch from './CheckboxSwitch'

describe('CheckboxSwitch', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CheckboxSwitch />)
    }).not.toThrow()
  })
})
