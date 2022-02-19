import {
  CheckboxField,
  DateField,
  DatetimeLocalField,
  TextField,
  TextAreaField,
} from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import Form from 'src/ui/Form'

const InvoiceForm = (props) => {
  const { currentUser } = useAuth()

  const onSubmit = (data) => {
    if (!props.invoice?.userId) data.userId = currentUser.id

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
              name: 'sent',
              label: 'Sent',
              element: CheckboxField,
              defaultValue: props.invoice?.sent,
            },
            {
              name: 'paid',
              label: 'Paid',
              element: CheckboxField,
              defaultValue: props.invoice?.paid,
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
