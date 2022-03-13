import { SelectField, TextField, TextAreaField } from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import Form from 'src/ui/Form'
import { statuses } from 'src/utils/enums'

const TaskForm = (props) => {
  const { currentUser } = useAuth()

  const onSubmit = (data) => {
    if (!props.task?.userId) data.userId = currentUser.id

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
              validation: {
                required: true,
              },
            },
            {
              name: 'description',
              label: 'Description',
              element: TextAreaField,
              defaultValue: props.task?.description,
            },
            {
              name: 'status',
              label: 'Status',
              element: SelectField,
              defaultValue: props.task?.status,
              newHide: true,
              attributes: {
                children: (
                  <>
                    {statuses.map((option, i) => (
                      <option key={i} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </>
                ),
              },
            },
          ],
        },
      ]}
    />
  )
}

export default TaskForm
