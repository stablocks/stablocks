import { DatetimeLocalField, NumberField, TextField } from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import Form from 'src/components/UI/Form'

const IncomeForm = (props) => {
  const { currentUser } = useAuth()

  const onSubmit = (data) => {
    if (!props.income?.employeeId) data.employeeId = currentUser.id

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
              elementProps: {
                step: '0.01',
              },
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
