import { useState } from 'react'
import type { FindEditTicketQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { routes } from '@redwoodjs/router'
import Loader from 'src/ui/Loader'
import PageTitle from 'src/ui/PageTitle'
import TicketForm from '../TicketForm'

export const QUERY = gql`
  query FindEditTicketQuery($id: Int!) {
    ticket(id: $id) {
      id
      title
      description
      status
    }
  }
`

const UPDATE_TICKET_MUTATION = gql`
  mutation UpdateTicketMutation($id: Int!, $input: UpdateTicketInput!) {
    updateTicket(id: $id, input: $input) {
      id
      title
      description
    }
  }
`

export const Loading = () => (
  <>
    <PageTitle
      title={`Edit Ticket`}
      currentCrumbLabel="Edit"
      breadcrumbs={[
        { title: 'Helpdesk', to: routes.helpdesk() },
        {
          title: 'Tickets',
          to: routes.tickets(),
        },
        { title: 'Ticket', to: '#' },
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

export const Success = ({ ticket }: CellSuccessProps<FindEditTicketQuery>) => {
  const [isSaved, setIsSaved] = useState(false)
  const [updateTask, { loading, error }] = useMutation(UPDATE_TICKET_MUTATION, {
    onCompleted: () => {
      setIsSaved(true)
      toast.success('Ticket updated')
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateTask({ variables: { id, input } })
  }

  return (
    <>
      <PageTitle
        title={`Edit Ticket`}
        currentCrumbLabel="Edit"
        breadcrumbs={[
          { title: 'Helpdesk', to: routes.helpdesk() },
          {
            title: 'Tickets',
            to: routes.tickets(),
          },
          { title: `#${ticket.id}`, to: routes.ticket({ id: ticket.id }) },
        ]}
        search={{ label: 'tickets', type: 'ticket' }}
      />
      <TicketForm
        onSave={onSave}
        loading={loading}
        error={error}
        isSaved={isSaved}
        ticket={ticket}
      />
    </>
  )
}
