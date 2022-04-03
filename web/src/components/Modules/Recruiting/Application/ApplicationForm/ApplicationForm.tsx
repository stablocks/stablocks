import { SelectField } from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import { applicationStatuses } from 'src/utils/enums'
import { usePermissions } from 'src/utils/permissions'
import Form from 'src/components/UI/Form'

const ApplicationForm = (props) => {
  const { currentUser } = useAuth()

  const onSubmit = (data) => {
    if (!props.application?.employeeId) data.employeeId = currentUser.id

    props.onSave(data, props.application?.id)
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
          authorized: usePermissions(['admin', 'recruitingAdmin']),
          fields: [
            {
              name: 'status',
              label: 'Status',
              element: SelectField,
              defaultValue: props.application?.status,
              authorized: usePermissions(['admin', 'recruitingAdmin']),
              attributes: {
                children: (
                  <>
                    {applicationStatuses.map((option, i) => (
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

export default ApplicationForm
