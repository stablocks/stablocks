import { TextField, TextAreaField } from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import Form from 'src/ui/Form'

const TaskForm = (props) => {
  const { currentUser } = useAuth()

  const onSubmit = (data) => {
    if (!props.task?.employeeId) data.employeeId = currentUser.id

    props.onSave(data, props.task?.id)
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
