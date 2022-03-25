import { Link, routes } from '@redwoodjs/router'
import PageTitle from 'src/ui/PageTitle'

const RecruitingPage = () => {
  return (
    <>
      <PageTitle title="Recruiting" search={{ label: 'jobs', type: 'job' }} />

      <p>
        Find me in{' '}
        <code>./web/src/pages/RecruitingPage/RecruitingPage.tsx</code>
      </p>
      <p>
        My default route is named <code>recruiting</code>, link to me with `
        <Link to={routes.recruiting()}>Recruiting</Link>`
      </p>
    </>
  )
}

export default RecruitingPage
