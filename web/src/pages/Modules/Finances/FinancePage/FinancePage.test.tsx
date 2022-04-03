import { render } from '@redwoodjs/testing/web'

import FinancePage from './FinancePage'

describe('FinancePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FinancePage />)
    }).not.toThrow()
  })
})
