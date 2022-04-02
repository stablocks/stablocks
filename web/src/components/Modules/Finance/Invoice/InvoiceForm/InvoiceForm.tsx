import {
  CheckboxField,
  DateField,
  DatetimeLocalField,
  TextField,
  TextAreaField,
} from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
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
          fields: [
            {
              name: 'currency',
              label: 'Currency',
              element: TextField,
              defaultValue: props.invoice?.currency,
              required: true,
            },
            {
              name: 'issued',
              label: 'Issued At',
              element: DatetimeLocalField,
              defaultValue: props.invoice?.issued,
            },
            {
              name: 'dueDate',
              label: 'Due Date',
              element: DateField,
              defaultValue: props.invoice?.dueDate,
              required: true,
            },
            {
              name: 'paidDate',
              label: 'Paid',
              element: DateField,
              defaultValue: props.invoice?.paidDate,
            },
            {
              name: 'description',
              label: 'Notes',
              element: TextAreaField,
              defaultValue: props.invoice?.description,
            },
          ],
        },
      ]}
    />
  )
}

export default InvoiceForm
