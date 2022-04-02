import { useState } from 'react'
import { routes } from '@redwoodjs/router'
import PageTitle from 'src/components/UI/PageTitle'
import Popup from 'src/components/UI/Popup'
import NewDepartment from 'src/components/Modules/Essentials/Department/NewDepartment'
import DepartmentsCell from 'src/components/Modules/Essentials/Department/DepartmentsCell'
import { PlusSmIcon } from '@heroicons/react/outline'

const DepartmentsPage = () => {
  const [isNewOpen, setIsNewOpen] = useState(false)

  return (
    <>
      <PageTitle
        title="Departments"
        breadcrumbs={[{ title: 'Organization', to: routes.organization() }]}
        search={{ label: 'departments', type: 'department' }}
        buttons={[
          {
            label: 'New Department',
            icon: PlusSmIcon,
            onClick: () => setIsNewOpen(true),
            main: true,
          },
        ]}
      />

      <Popup isOpen={isNewOpen} setIsOpen={setIsNewOpen} title="New company">
        <NewDepartment setOpen={setIsNewOpen} />
      </Popup>

      <DepartmentsCell />
    </>
  )
}

export default DepartmentsPage
