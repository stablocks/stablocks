import { DatetimeLocalField, NumberField, TextField } from '@redwoodjs/forms'
import Form from 'src/ui/Form'

const IncomeForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props.income?.id)
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
              defaultValue: props.income?.name,
              required: true,
            },
            {
              name: 'amount',
              label: 'Amount',
              element: NumberField,
              defaultValue: props.income?.amount,
              required: true,
            },
            {
              name: 'date',
              label: 'Date',
              element: DatetimeLocalField,
              defaultValue: props.income?.date,
              required: true,
            },
            {
              name: 'currency',
              label: 'Currency',
              element: TextField,
              defaultValue: props.income?.currency,
            },
          ],
        },
      ]}
    />
  )
}

export default IncomeForm
