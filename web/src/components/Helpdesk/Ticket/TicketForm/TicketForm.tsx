import { TextField, TextAreaField } from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import Form from 'src/ui/Form'

const TicketForm = (props) => {
  const { currentUser } = useAuth()

  const onSubmit = (data) => {
    if (!props.ticket?.employeeId) data.employeeId = currentUser.id

    props.onSave(data, props.ticket?.id)
  }

  return (
    <Form
      onSubmit={onSubmit}
      loading={props.loading}
      error={props.error}
      newForm={props.newForm}
      isSaved={props.isSaved}
      sections={[
        {
          fields: [
            {
              name: 'title',
              label: 'Title',
              element: TextField,
              defaultValue: props.ticket?.title,
              required: true,
            },
            {
              name: 'description',
              label: 'Description',
              element: TextAreaField,
              defaultValue: props.ticket?.description,
            },
          ],
        },
      ]}
    />
  )
}

export default TicketForm
