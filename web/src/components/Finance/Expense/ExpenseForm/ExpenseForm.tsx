import { DateField, SelectField, TextField } from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import Form from 'src/ui/Form'
import { currencies } from 'src/utils/enums'
import { usePermissions } from 'src/utils/permissions'

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
          authorized: usePermissions(['admin', 'financeAdmin', 'finance']),
          fields: [
            {
              name: 'name',
              label: 'Name',
              element: TextField,
              defaultValue: props.expense?.name,
              authorized: usePermissions(['admin', 'financeAdmin', 'finance']),
              validation: {
                required: true,
              },
            },
            {
              name: 'amount',
              label: 'Amount',
              element: TextField,
              defaultValue: props.expense?.amount,
              authorized: usePermissions(['admin', 'financeAdmin', 'finance']),
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
              authorized: usePermissions(['admin', 'financeAdmin', 'finance']),
              validation: {
                required: true,
              },
            },
            {
              name: 'currency',
              label: 'Currency',
              element: SelectField,
              defaultValue: props.expense?.currency,
              authorized: usePermissions(['admin', 'financeAdmin', 'finance']),
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
