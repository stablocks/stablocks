import PageTitle from 'src/components/UI/PageTitle'
import Popup from 'src/components/UI/Popup'
import NewJob from 'src/components/Modules/Recruiting/Job/NewJob'
import JobsCell from 'src/components/Modules/Recruiting/Job/JobsCell'
import { PlusSmIcon } from '@heroicons/react/outline'

const JobsPage = () => {
  const [isNewOpen, setIsNewOpen] = React.useState(false)

  return (
    <>
      <PageTitle
        title="Jobs"
        search={{ label: 'jobs', type: 'job' }}
        buttons={[
          {
            label: 'New Job',
            icon: PlusSmIcon,
            onClick: () => setIsNewOpen(true),
            main: true,
          },
        ]}
      />

      <Popup isOpen={isNewOpen} setIsOpen={setIsNewOpen} title="New job">
        <NewJob setOpen={setIsNewOpen} />
      </Popup>

      <JobsCell />
    </>
  )
}

export default JobsPage
