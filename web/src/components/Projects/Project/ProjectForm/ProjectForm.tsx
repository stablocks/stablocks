import { TextAreaField, TextField } from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import Form from 'src/ui/Form'

const ProjectForm = (props) => {
  const { currentUser } = useAuth()

  const onSubmit = (data) => {
    if (!props.project?.employeeId) data.employeeId = currentUser.id

    props.onSave(data, props.project?.id)
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
              defaultValue: props.project?.title,
              required: true,
            },
            {
              name: 'description',
              label: 'Description',
              element: TextAreaField,
              defaultValue: props.project?.description,
            },
          ],
        },
      ]}
    />
  )
}

export default ProjectForm
