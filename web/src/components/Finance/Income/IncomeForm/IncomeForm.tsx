import { DateField, SelectField, TextField } from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import Form from 'src/ui/Form'
import { currencies } from 'src/utils/enums'
import { usePermissions } from 'src/utils/permissions'

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
          authorized: usePermissions(['admin', 'financeAdmin', 'finance']),
          fields: [
            {
              name: 'name',
              label: 'Name',
              element: TextField,
              defaultValue: props.income?.name,
              authorized: usePermissions(['admin', 'financeAdmin', 'finance']),
              validation: {
                required: true,
              },
            },
            {
              name: 'amount',
              label: 'Amount',
              element: TextField,
              defaultValue: props.income?.amount,
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
              defaultValue: props.income?.date,
              authorized: usePermissions(['admin', 'financeAdmin', 'finance']),
              validation: {
                required: true,
              },
            },
            {
              name: 'currency',
              label: 'Currency',
              element: SelectField,
              defaultValue: props.income?.currency,
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

export default IncomeForm
