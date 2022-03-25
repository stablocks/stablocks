import { DatetimeLocalField, NumberField, TextField } from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import Form from 'src/ui/Form'

const ExpenseForm = (props) => {
  const { currentUser } = useAuth()

  const onSubmit = (data) => {
    if (!props.expense?.employeeId) data.employeeId = currentUser.id

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
              elementProps: {
                step: '0.01',
              },
              defaultValue: props.expense?.amount,
              required: true,
            },
            {
              name: 'date',
              label: 'Date',
              element: DatetimeLocalField,
              defaultValue: props.expense?.date
                ? new Date(props.expense?.date).toISOString().slice(0, -1)
                : undefined,
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
