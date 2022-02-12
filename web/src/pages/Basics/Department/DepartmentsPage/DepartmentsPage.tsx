import { Link, routes } from '@redwoodjs/router'
import PageTitle from 'src/components/Layout/PageTitle'

const DepartmentsPage = () => {
  return (
    <>
      <PageTitle
        title="Departments"
        search={{ label: 'departments', type: 'department' }}
      />

      <p>
        Find me in{' '}
        <code>./web/src/pages/DepartmentsPage/DepartmentsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>departments</code>, link to me with `
        <Link to={routes.departments()}>Departments</Link>`
      </p>
    </>
  )
}

export default DepartmentsPage
