import { TextAreaField, TextField } from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import Form from 'src/ui/Form'

const ProjectForm = (props) => {
  const { currentUser } = useAuth()

  const onSubmit = (data) => {
    if (!props.project?.userId) data.userId = currentUser.id

    props.onSave(data, props.project?.id)
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
