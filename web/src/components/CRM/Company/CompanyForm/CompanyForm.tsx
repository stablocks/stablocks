import { TelField, TextField, UrlField } from '@redwoodjs/forms'
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
              defaultValue: props.company?.name,
              validation: {
                required: true,
              },
            },
            {
              name: 'website',
              label: 'Website',
              element: UrlField,
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
