import { TextField, TextAreaField } from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import { usePermissions } from 'src/utils/permissions'
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
      loading={props.loading}
      error={props.error}
      newForm={props.newForm}
      isSaved={props.isSaved}
      sections={[
        {
          authorized: usePermissions(
            ['admin', 'employee'],
            [props.task?.userId, props.task?.assigneeId]
          ),
          fields: [
            {
              name: 'title',
              label: 'Title',
              element: TextField,
              defaultValue: props.task?.title,
              authorized: usePermissions(
                ['admin', 'employee'],
                [props.task?.userId, props.task?.assigneeId]
              ),
              validation: {
                required: true,
              },
            },
            {
              name: 'description',
              label: 'Description',
              element: TextAreaField,
              defaultValue: props.task?.description,
              authorized: usePermissions(
                ['admin', 'employee'],
                [props.task?.userId, props.task?.assigneeId]
              ),
            },
          ],
        },
      ]}
    />
  )
}

export default TaskForm
