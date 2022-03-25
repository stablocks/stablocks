import { TelField, TextField } from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import Form from 'src/ui/Form'

const CompanyForm = (props) => {
  const { currentUser } = useAuth()

  const onSubmit = (data) => {
    if (!props.company?.employeeId) data.employeeId = currentUser.id

    props.onSave(data, props.company?.id)
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
              defaultValue: props.company?.name,
              required: true,
            },
            {
              name: 'website',
              label: 'Website',
              element: TextField,
              defaultValue: props.company?.website,
            },
            {
              name: 'phone',
              label: 'Phone',
              element: TelField,
              defaultValue: props.company?.phone,
            },
          ],
        },
      ]}
    />
  )
}

export default CompanyForm
