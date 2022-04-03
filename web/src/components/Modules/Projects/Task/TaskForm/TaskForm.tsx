import { TextField, TextAreaField } from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import Form from 'src/components/UI/Form'

const TaskForm = (props) => {
  const { currentUser } = useAuth()

  const onSubmit = (data) => {
    if (!props.task?.employeeId) data.employeeId = currentUser.id

    props.onSave(data, props.task?.id)
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
              defaultValue: props.task?.title,
              required: true,
            },
            {
              name: 'description',
              label: 'Description',
              element: TextAreaField,
              defaultValue: props.task?.description,
            },
          ],
        },
      ]}
    />
  )
}

export default TaskForm
