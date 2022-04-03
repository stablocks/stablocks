import {
  DateField,
  DatetimeLocalField,
  SelectField,
  TextAreaField,
} from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import { currencies } from 'src/utils/enums'
import { usePermissions } from 'src/utils/permissions'
import Form from 'src/components/UI/Form'

const InvoiceForm = (props) => {
  const { currentUser } = useAuth()

  const onSubmit = (data) => {
    if (!props.invoice?.employeeId) data.employeeId = currentUser.id

    props.onSave(data, props.invoice?.id)
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
          authorized: usePermissions(['admin', 'financeAdmin']),
          fields: [
            {
              name: 'currency',
              label: 'Currency',
              element: SelectField,
              defaultValue: props.invoice?.currency,
              authorized: usePermissions(['admin', 'financeAdmin']),
              validation: {
                required: true,
              },
              attributes: {
                children: (
                  <>
                    {currencies.map((option, i) => (
                      <option key={i} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </>
                ),
              },
            },
            {
              name: 'issued',
              label: 'Issued At',
              element: DatetimeLocalField,
              defaultValue: props.invoice?.issued,
              authorized: usePermissions(['admin', 'financeAdmin']),
            },
            {
              name: 'dueDate',
              label: 'Due Date',
              element: DateField,
              defaultValue: props.invoice?.dueDate,
              authorized: usePermissions(['admin', 'financeAdmin']),
              validation: {
                required: true,
              },
            },
            {
              name: 'paidDate',
              label: 'Paid',
              element: DateField,
              defaultValue: props.invoice?.paidDate,
              authorized: usePermissions(['admin', 'financeAdmin']),
            },
            {
              name: 'description',
              label: 'Notes',
              element: TextAreaField,
              defaultValue: props.invoice?.description,
              authorized: usePermissions(['admin', 'financeAdmin']),
            },
          ],
        },
      ]}
    />
  )
}

export default InvoiceForm
