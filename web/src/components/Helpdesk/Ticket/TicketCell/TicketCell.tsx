import type { FindTicketQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes, useParams } from '@redwoodjs/router'
import Loader from 'src/ui/Loader'
import InfoImage from 'src/ui/InfoImage'
import PageTitle from 'src/ui/PageTitle'
import { PencilAltIcon } from '@heroicons/react/outline'
import { statuses } from 'src/utils/enums'

export const QUERY = gql`
  query FindTicketQuery($id: Int!) {
    ticket(id: $id) {
      id
      title
      description
      status
    }
  }
`

const UPDATE_TICKET_STATUS_MUTATION = gql`
  mutation UpdateTicketStatusMutation($id: Int!, $input: UpdateTicketInput!) {
    updateTicket(id: $id, input: $input) {
      id
      status
    }
  }
`

const NonSuccessHeader = () => (
  <PageTitle
    title="Ticket"
    breadcrumbs={[
      { title: 'Helpdesk', to: routes.helpdesk() },
      { title: 'Tickets', to: routes.tickets() },
    ]}
    search={{ label: 'tickets', type: 'ticket' }}
  />
)

export const Loading = () => (
  <>
    <NonSuccessHeader />
    <Loader />
  </>
)

export const Empty = () => (
  <>
    <NonSuccessHeader />
    <InfoImage type="error" message="This ticket could not be found" />
  </>
)

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ ticket }: CellSuccessProps<FindTicketQuery>) => {
  const { id } = useParams()

  const [updateTicket, { loading }] = useMutation(
    UPDATE_TICKET_STATUS_MUTATION,
    {
      onCompleted: () => {
        toast.success('Ticket status updated')
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const label = statuses.find((status) => status.value === ticket.status).label

  const onStatusChange = (value: string) => {
    if (value !== ticket.status) {
      updateTicket({ variables: { id, input: { status: value } } })
    }
  }

  return (
    <>
      <PageTitle
        title={ticket.title}
        metaTitle={`#${ticket.id}`}
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
          {
            label,
            main: true,
            disabled: loading,
            children: [
              ...statuses.map((status) => {
                return {
                  label: status.label,
                  onClick: () => onStatusChange(status.value),
                }
              }),
            ],
          },
        ]}
      />
      {JSON.stringify(ticket)}
    </>
  )
}
