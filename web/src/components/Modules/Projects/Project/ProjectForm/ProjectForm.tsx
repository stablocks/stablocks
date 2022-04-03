import { TextAreaField, TextField } from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import { usePermissions } from 'src/utils/permissions'
import Form from 'src/components/UI/Form'

const ProjectForm = (props) => {
  const { currentUser } = useAuth()

  const onSubmit = (data) => {
    if (!props.project?.employeeId) data.employeeId = currentUser.id

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
          authorized: usePermissions(
            ['admin', 'projectsAdmin'],
            props.project?.userId
          ),
          fields: [
            {
              name: 'title',
              label: 'Title',
              element: TextField,
              defaultValue: props.project?.title,
              authorized: usePermissions(
                ['admin', 'projectsAdmin'],
                props.project?.userId
              ),
              validation: {
                required: true,
              },
            },
            {
              name: 'description',
              label: 'Description',
              element: TextAreaField,
              defaultValue: props.project?.description,
              authorized: usePermissions(
                ['admin', 'projectsAdmin'],
                props.project?.userId
              ),
            },
          ],
        },
      ]}
    />
  )
}

export default ProjectForm
