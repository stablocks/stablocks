import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import ContactForm from '../ContactForm'

import { QUERY as CONTACTS_QUERY } from '../ContactsCell'

const CREATE_CONTACT_MUTATION = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const NewContact = (props) => {
  const [createContact, { loading, error }] = useMutation(
    CREATE_CONTACT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Contact created')
        props.setOpen(false)
      },
      refetchQueries: [{ query: CONTACTS_QUERY }],
      awaitRefetchQueries: true,
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createContact({ variables: { input } })
  }

  return (
    <ContactForm
      onSave={onSave}
      loading={loading}
      error={error}
      newForm={true}
    />
  )
}

export default NewContact
