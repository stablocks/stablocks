import { EmailField, SelectField, TextField } from '@redwoodjs/forms'
import Form from 'src/ui/Form'
import FileUpload from 'src/components/Elements/FileUpload'
import SupervisorSelectCell from 'src/components/Basics/Employee/SupervisorSelectCell'
import DepartmentSelectCell from 'src/components/Basics/Department/DepartmentSelectCell'
import { usePermissions } from 'src/utils/permissions'

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
          authorized: usePermissions('admin', props.employee?.id),
          fields: [
            {
              name: 'firstName',
              label: 'First Name',
              element: TextField,
              defaultValue: props.employee?.firstName,
              authorized: usePermissions('admin', props.employee?.id),
              validation: {
                required: true,
              },
            },
            {
              name: 'middleName',
              label: 'Middle Name',
              element: TextField,
              defaultValue: props.employee?.middleName,
              authorized: usePermissions('admin', props.employee?.id),
            },
            {
              name: 'lastName',
              label: 'Last Name',
              element: TextField,
              defaultValue: props.employee?.lastName,
              authorized: usePermissions('admin', props.employee?.id),
              validation: {
                required: true,
              },
            },
            {
              name: 'email',
              label: 'Company Email Address',
              element: EmailField,
              defaultValue: props.employee?.email,
              authorized: usePermissions('admin'),
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
              authorized: usePermissions('admin', props.employee?.id),
            },
          ],
        },
        {
          title: 'Organization Information',
          authorized: usePermissions('admin', props.employee?.id),
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
              authorized: usePermissions('admin', props.employee?.id),
            },
          ],
        },
      ]}
    />
  )
}

export default EmployeeForm
