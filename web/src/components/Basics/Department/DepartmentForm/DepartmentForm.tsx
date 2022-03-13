import { EmailField, TextField } from '@redwoodjs/forms'
import Form from 'src/ui/Form'

const DepartmentForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props.department?.id)
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
              name: 'name',
              label: 'Name',
              element: TextField,
              defaultValue: props.department?.name,
              validation: {
                required: true,
              },
            },
            {
              name: 'email',
              label: 'Email',
              element: EmailField,
              defaultValue: props.department?.email,
            },
          ],
        },
      ]}
    />
  )
}

export default DepartmentForm
