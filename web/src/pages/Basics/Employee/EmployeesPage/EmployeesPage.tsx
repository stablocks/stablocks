import { useState } from 'react'
import { routes } from '@redwoodjs/router'
import PageTitle from 'src/ui/PageTitle'
import EmployeesCell from 'src/components/Cells/Employee/EmployeesCell'
import Popup from 'src/components/Elements/Popup'
import { UserAddIcon } from '@heroicons/react/outline'
import NewEmployee from 'src/components/NewComponents/NewEmployee'

const EmployeesPage = () => {
  const [newEmployeeOpen, setNewEmployeeOpen] = useState(false)
  const [newUserEmployeeOpen, setNewUserEmployeeOpen] = useState(false)

  return (
    <>
      <PageTitle
        title="Employees"
        breadcrumbs={[{ title: 'Organization', to: routes.organization() }]}
        search={{ label: 'employees', type: 'employee' }}
        buttons={[
          {
            label: 'New Employee',
            icon: UserAddIcon,
            onClick: () => setNewEmployeeOpen(true),
            main: true,
            roles: ['admin'],
            children: [
              {
                label: 'New Employee from User',
                onClick: () => setNewUserEmployeeOpen(true),
              },
            ],
          },
        ]}
      />
      <Popup
        isOpen={newEmployeeOpen}
        setIsOpen={setNewEmployeeOpen}
        title="Add new employee"
      >
        <NewEmployee />
      </Popup>
      <Popup
        isOpen={newUserEmployeeOpen}
        setIsOpen={setNewUserEmployeeOpen}
        title="Create employee from user"
        description="Choose an applicant to convert into an employee"
      ></Popup>
      <EmployeesCell />
    </>
  )
}

export default EmployeesPage
