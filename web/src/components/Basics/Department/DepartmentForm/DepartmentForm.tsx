import { TextField } from '@redwoodjs/forms'
import Form from 'src/ui/Form'

const DepartmentForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props.department?.id)
  }

  return (
    <Form
      onSubmit={onSubmit}
      {...props}
      sections={[
        {
          fields: [
            {
              name: 'name',
              label: 'Name',
              element: TextField,
              defaultValue: props.department?.name,
              required: true,
            },
            {
              name: 'email',
              label: 'Email',
              element: TextField,
              defaultValue: props.department?.email,
            },
          ],
        },
      ]}
    />
  )
}

export default DepartmentForm
