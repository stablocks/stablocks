import { EmailField, NumberField, TelField, TextField } from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import Form from 'src/ui/Form'

const ContactForm = (props) => {
  const { currentUser } = useAuth()

  const onSubmit = (data) => {
    if (!props.contact?.userId) data.userId = currentUser.id

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
        {
          title: 'Address Information',
          fields: [
            {
              name: 'address',
              label: 'Address',
              element: TextField,
              defaultValue: props.contact?.address,
            },
            {
              name: 'addressTwo',
              label: 'Apt., P.O. Box, etc.',
              element: TextField,
              defaultValue: props.contact?.addressTwo,
            },
            {
              name: 'city',
              label: 'City',
              element: TextField,
              defaultValue: props.contact?.city,
            },
            {
              name: 'state',
              label: 'State',
              element: TextField,
              defaultValue: props.contact?.state,
            },
            {
              name: 'zipCode',
              label: 'ZIP / Postal Code',
              element: NumberField,
              defaultValue: props.contact?.zipCode,
            },
          ],
        },
      ]}
    />
  )
}

export default ContactForm
