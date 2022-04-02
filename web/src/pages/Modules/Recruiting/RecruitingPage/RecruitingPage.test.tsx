import { render } from '@redwoodjs/testing/web'

import RecruitingPage from './RecruitingPage'

describe('RecruitingPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RecruitingPage />)
    }).not.toThrow()
  })
})
