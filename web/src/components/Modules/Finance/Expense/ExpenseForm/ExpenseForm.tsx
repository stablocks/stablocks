import { DateField, NumberField, TextField } from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import Form from 'src/components/UI/Form'

const ExpenseForm = (props) => {
  const { currentUser } = useAuth()

  const onSubmit = (data) => {
    if (!props.expense?.employeeId) data.employeeId = currentUser.id

    props.onSave(data, props.expense?.id)
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
              element: DateField,
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
