import { DatetimeLocalField, NumberField, TextField } from '@redwoodjs/forms'
import Form from 'src/ui/Form'

const ExpenseForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props.expense?.id)
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
              defaultValue: props.expense?.name,
              required: true,
            },
            {
              name: 'amount',
              label: 'Amount',
              element: NumberField,
              defaultValue: props.expense?.amount,
              required: true,
            },
            {
              name: 'date',
              label: 'Date',
              element: DatetimeLocalField,
              defaultValue: props.expense?.date,
              required: true,
            },
            {
              name: 'currency',
              label: 'Currency',
              element: TextField,
              defaultValue: props.expense?.currency,
            },
          ],
        },
      ]}
    />
  )
}

export default ExpenseForm
