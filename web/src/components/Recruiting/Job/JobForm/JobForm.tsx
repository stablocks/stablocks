import { TextAreaField, TextField } from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import Form from 'src/ui/Form'

const JobForm = (props) => {
  const { currentUser } = useAuth()

  const onSubmit = (data) => {
    if (!props.job?.employeeId) data.employeeId = currentUser.id

    props.onSave(data, props.job?.id)
  }

  return (
    <Form
      onSubmit={onSubmit}
      {...props}
      sections={[
        {
          fields: [
            {
              name: 'title',
              label: 'Title',
              element: TextField,
              defaultValue: props.job?.title,
              required: true,
            },
            {
              name: 'description',
              label: 'Description',
              element: TextAreaField,
              defaultValue: props.job?.description,
            },
          ],
        },
      ]}
    />
  )
}

export default JobForm
