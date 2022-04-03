import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const EmployeeRolesPage = () => {
  return (
    <>
      <MetaTags title="EmployeeRoles" description="EmployeeRoles page" />

      <h1>EmployeeRolesPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/EmployeeRolesPage/EmployeeRolesPage.tsx</code>
      </p>
      <p>
        My default route is named <code>employeeRoles</code>, link to me with `
        <Link to={routes.employeeRoles()}>EmployeeRoles</Link>`
      </p>
    </>
  )
}

export default EmployeeRolesPage
