import { TextField } from '@redwoodjs/forms'
import Form from 'src/ui/Form'

const EmployeeForm = (props) => {
  const onSubmit = (data) => {
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        const element = data[key]
        if (element === 'true') data[key] = true
        if (element === 'false') data[key] = false
      }
    }

    props.onSave(data, props.employee?.id)
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
          title: 'General Information',
          fields: [
            {
              name: 'firstName',
              label: 'First Name',
              element: TextField,
              defaultValue: props.employee?.firstName,
              required: true,
            },
            {
              name: 'middleName',
              label: 'Middle Name',
              element: TextField,
              defaultValue: props.employee?.middleName,
            },
            {
              name: 'lastName',
              label: 'Last Name',
              element: TextField,
              defaultValue: props.employee?.lastName,
              required: true,
            },
            {
              name: 'email',
              label: 'Company Email Address',
              element: TextField,
              defaultValue: props.employee?.email,
              required: true,
            },
            {
              name: 'profileImage',
              label: 'Profile Picture',
              element: TextField,
              defaultValue: props.employee?.profileImage,
              newHide: true,
            },
          ],
        },
        {
          title: 'Organization Information',
          fields: [
            {
              name: 'resume',
              label: 'Résumé',
              element: TextField,
              defaultValue: props.employee?.resume,
              newHide: true,
            },
          ],
        },
      ]}
    />
  )
}

export default EmployeeForm
