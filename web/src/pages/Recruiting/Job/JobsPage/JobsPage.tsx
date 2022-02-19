import PageTitle from 'src/ui/PageTitle'
import Popup from 'src/components/Elements/Popup'
import NewJob from 'src/components/Recruiting/Job/NewJob'
import JobsCell from 'src/components/Recruiting/Job/JobsCell'
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
