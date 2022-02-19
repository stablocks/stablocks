import type { FindTicketQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import Loader from 'src/ui/Loader'
import PageTitle from 'src/ui/PageTitle'
import { PencilAltIcon } from '@heroicons/react/outline'

export const QUERY = gql`
  query FindTicketQuery($id: Int!) {
    ticket(id: $id) {
      id
      title
      description
    }
  }
`

export const Loading = () => (
  <>
    <PageTitle
      title="Ticket"
      breadcrumbs={[
        { title: 'Helpdesk', to: routes.helpdesk() },
        { title: 'Tickets', to: routes.tickets() },
      ]}
      search={{ label: 'tickets', type: 'ticket' }}
    />
    <Loader />
  </>
)

export const Empty = () => <></>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ ticket }: CellSuccessProps<FindTicketQuery>) => {
  return (
    <>
      <PageTitle
        title={ticket.title}
        currentCrumbLabel={`#${ticket.id}`}
        breadcrumbs={[
          { title: 'Helpdesk', to: routes.helpdesk() },
          { title: 'Tickets', to: routes.tickets() },
        ]}
        search={{ label: 'tickets', type: 'ticket' }}
        buttons={[
          {
            label: 'Edit',
            icon: PencilAltIcon,
            onClick: () => navigate(routes.editTicket({ id: ticket.id })),
          },
        ]}
      />
      {JSON.stringify(ticket)}
    </>
  )
}
