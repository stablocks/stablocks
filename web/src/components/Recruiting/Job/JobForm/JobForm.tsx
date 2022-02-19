import { TextAreaField, TextField } from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import Form from 'src/ui/Form'

const JobForm = (props) => {
  const { currentUser } = useAuth()

  const onSubmit = (data) => {
    if (!props.job?.userId) data.userId = currentUser.id

    props.onSave(data, props.job?.id)
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
