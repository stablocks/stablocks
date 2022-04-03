import { Redirect, routes } from '@redwoodjs/router'
import Login from 'src/components/UI/Login'

const EmployeeLoginPage = () => {
  if (!process.env.THIRD_PARTY_AUTH) {
    return <Redirect to={routes.login()} />
  }

  return <Login employee={true} />
}

export default EmployeeLoginPage
