import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { useParams } from '@redwoodjs/router'
import TicketForm from '../TicketForm'

import { QUERY as TICKETS_QUERY } from '../TicketsCell'

const CREATE_TICKET_MUTATION = gql`
  mutation CreateTicketMutation($input: CreateTicketInput!) {
    createTicket(input: $input) {
      id
    }
  }
`

const NewTicket = (props) => {
  const { id } = useParams()
  const [createTicket, { loading, error }] = useMutation(
    CREATE_TICKET_MUTATION,
    {
      onCompleted: () => {
        toast.success('Ticket created')
        props.setOpen(false)
      },
      refetchQueries: [{ query: TICKETS_QUERY }],
      awaitRefetchQueries: true,
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    input.projectId = id
    createTicket({ variables: { input } })
  }

  return (
    <TicketForm
      onSave={onSave}
      loading={loading}
      error={error}
      newForm={true}
    />
  )
}

export default NewTicket
