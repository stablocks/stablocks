import { EmailField, NumberField, TelField, TextField } from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import Form from 'src/components/UI/Form'

const ContactForm = (props) => {
  const { currentUser } = useAuth()

  const onSubmit = (data) => {
    if (!props.contact?.employeeId) data.employeeId = currentUser.id

    props.onSave(data, props.contact?.id)
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
          title: 'General Information',
          fields: [
            {
              name: 'firstName',
              label: 'First Name',
              element: TextField,
              defaultValue: props.contact?.firstName,
              required: true,
            },
            {
              name: 'lastName',
              label: 'Last Name',
              element: TextField,
              defaultValue: props.contact?.lastName,
              required: true,
            },
            {
              name: 'email',
              label: 'Email',
              element: EmailField,
              defaultValue: props.contact?.email,
            },
            {
              name: 'phone',
              label: 'Phone number',
              element: TelField,
              defaultValue: props.contact?.phone,
            },
          ],
        },
      ]}
    />
  )
}

export default ContactForm
