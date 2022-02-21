import { TextField } from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import Form from 'src/ui/Form'

const ApplicationForm = (props) => {
  const { currentUser } = useAuth()

  const onSubmit = (data) => {
    if (!props.application?.userId) data.userId = currentUser.id

    props.onSave(data, props.application?.id)
  }

  return (
    <Form
      onSubmit={onSubmit}
      {...props}
      sections={[
        {
          fields: [
            {
              name: 'status',
              label: 'Status',
              element: TextField,
              defaultValue: props.application?.status,
            },
          ],
        },
      ]}
    />
  )
}

export default ApplicationForm
