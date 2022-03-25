import { DateField, NumberField, TextField } from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import Form from 'src/ui/Form'

const IncomeForm = (props) => {
  const { currentUser } = useAuth()

  const onSubmit = (data) => {
    if (!props.income?.employeeId) data.employeeId = currentUser.id

    props.onSave(data, props.income?.id)
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
              element: DateField,
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
