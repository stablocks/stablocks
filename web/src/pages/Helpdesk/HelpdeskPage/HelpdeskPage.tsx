import { Link, routes } from '@redwoodjs/router'
import PageTitle from 'src/ui/PageTitle'

const HelpdeskPage = () => {
  return (
    <>
      <PageTitle
        title="Helpdesk"
        search={{ label: 'tickets', type: 'ticket' }}
      />

      <p>
        Find me in <code>./web/src/pages/HelpdeskPage/HelpdeskPage.tsx</code>
      </p>
      <p>
        My default route is named <code>helpdesk</code>, link to me with `
        <Link to={routes.helpdesk()}>Helpdesk</Link>`
      </p>
    </>
  )
}

export default HelpdeskPage
