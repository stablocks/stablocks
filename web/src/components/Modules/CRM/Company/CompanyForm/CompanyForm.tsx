import { TelField, TextField, UrlField } from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import { usePermissions } from 'src/utils/permissions'
import Form from 'src/components/UI/Form'

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
          authorized: usePermissions(
            ['admin', 'crmAdmin'],
            props.company?.userId
          ),
          fields: [
            {
              name: 'name',
              label: 'Name',
              element: TextField,
              defaultValue: props.company?.name,
              authorized: usePermissions(
                ['admin', 'crmAdmin'],
                props.company?.userId
              ),
              validation: {
                required: true,
              },
            },
            {
              name: 'website',
              label: 'Website',
              element: UrlField,
              defaultValue: props.company?.website,
              authorized: usePermissions(
                ['admin', 'crmAdmin'],
                props.company?.userId
              ),
            },
            {
              name: 'phone',
              label: 'Phone',
              element: TelField,
              defaultValue: props.company?.phone,
              authorized: usePermissions(
                ['admin', 'crmAdmin'],
                props.company?.userId
              ),
            },
          ],
        },
      ]}
    />
  )
}

export default CompanyForm
