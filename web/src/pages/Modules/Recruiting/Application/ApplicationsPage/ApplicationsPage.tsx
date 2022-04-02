import { routes } from '@redwoodjs/router'
import PageTitle from 'src/components/UI/PageTitle'
import ApplicationsCell from 'src/components/Modules/Recruiting/Application/ApplicationsCell'

const ApplicationsPage = () => {
  return (
    <>
      <PageTitle
        title="Your Applications"
        breadcrumbs={[{ title: 'Jobs', to: routes.jobs() }]}
        currentCrumbLabel="Applications"
        search={{ label: 'applications', type: 'application' }}
      />

      <ApplicationsCell />
    </>
  )
}

export default ApplicationsPage
