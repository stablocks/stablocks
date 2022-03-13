import { DateField, SelectField, TextField } from '@redwoodjs/forms'
import Form from 'src/ui/Form'
import { currencies } from 'src/utils/enums'

const ExpenseForm = (props) => {
  const onSubmit = (data) => {
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
              validation: {
                required: true,
              },
            },
            {
              name: 'amount',
              label: 'Amount',
              element: TextField,
              defaultValue: props.expense?.amount,
              validation: {
                required: true,
                valueAsNumber: true,
              },
            },
            {
              name: 'date',
              label: 'Date',
              element: DateField,
              defaultValue: props.expense?.date,
              validation: {
                required: true,
              },
            },
            {
              name: 'currency',
              label: 'Currency',
              element: SelectField,
              defaultValue: props.expense?.currency,
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
          ],
        },
      ]}
    />
  )
}

export default ExpenseForm
