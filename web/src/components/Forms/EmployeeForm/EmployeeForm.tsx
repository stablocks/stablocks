import { EmailField, SelectField, TextField } from '@redwoodjs/forms'
import Form from 'src/ui/Form'
import FileUpload from 'src/components/Elements/FileUpload'
import SupervisorSelectCell from 'src/components/Basics/Employee/SupervisorSelectCell'
import DepartmentSelectCell from 'src/components/Basics/Department/DepartmentSelectCell'

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
              validation: {
                required: true,
              },
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
              validation: {
                required: true,
              },
            },
            {
              name: 'email',
              label: 'Company Email Address',
              element: EmailField,
              defaultValue: props.employee?.email,
              validation: {
                required: true,
              },
            },
            {
              name: 'profileImage',
              label: 'Profile Picture',
              element: FileUpload,
              defaultValue: props.employee?.profileImage,
              newHide: true,
              attributes: {
                type: 'image/png, image/jpg',
              },
            },
          ],
        },
        {
          title: 'Organization Information',
          fields: [
            {
              name: 'resume',
              label: 'Résumé',
              element: FileUpload,
              defaultValue: props.employee?.resume,
              newHide: true,
              attributes: {
                type: '.pdf',
              },
            },
          ],
        },
      ]}
    />
  )
}

export default EmployeeForm
