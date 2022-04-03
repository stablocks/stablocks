import { render } from '@redwoodjs/testing/web'

import IncomeForm from './IncomeForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('IncomeForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<IncomeForm />)
    }).not.toThrow()
  })
})
