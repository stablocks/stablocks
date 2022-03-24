import {
  CheckboxField,
  DateField,
  DatetimeLocalField,
  SelectField,
  TextAreaField,
} from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import Form from 'src/ui/Form'
import { currencies } from 'src/utils/enums'

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
              element: SelectField,
              defaultValue: props.invoice?.currency,
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
            },
            {
              name: 'dueDate',
              label: 'Due Date',
              element: DateField,
              defaultValue: props.invoice?.dueDate,
              validation: {
                required: true,
              },
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
