import { useState } from 'react'
import { usePermissions } from 'src/utils/permissions'
import PageTitle from 'src/components/UI/PageTitle'
import Popup from 'src/components/UI/Popup'
import NewProject from 'src/components/Modules/Projects/Project/NewProject'
import ProjectsCell from 'src/components/Modules/Projects/Project/ProjectsCell'
import { PlusSmIcon } from '@heroicons/react/outline'

const ProjectsPage = () => {
  const [isNewOpen, setIsNewOpen] = useState(false)

  return (
    <>
      <PageTitle
        title="Projects"
        search={{ label: 'projects', type: 'project' }}
        buttons={[
          {
            label: 'New Project',
            icon: PlusSmIcon,
            onClick: () => setIsNewOpen(true),
            main: true,
            authorized: usePermissions(['admin', 'projectsAdmin', 'projects']),
          },
        ]}
      />

      <Popup isOpen={isNewOpen} setIsOpen={setIsNewOpen} title="New project">
        <NewProject setOpen={setIsNewOpen} />
      </Popup>

      <ProjectsCell />
    </>
  )
}

export default ProjectsPage
