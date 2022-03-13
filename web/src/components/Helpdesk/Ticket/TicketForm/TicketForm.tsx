import { SelectField, TextField, TextAreaField } from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import Form from 'src/ui/Form'
import { statuses } from 'src/utils/enums'

const TicketForm = (props) => {
  const { currentUser } = useAuth()

  const onSubmit = (data) => {
    if (!props.ticket?.userId) data.userId = currentUser.id

    props.onSave(data, props.ticket?.id)
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
              name: 'title',
              label: 'Title',
              element: TextField,
              defaultValue: props.ticket?.title,
              validation: {
                required: true,
              },
            },
            {
              name: 'description',
              label: 'Description',
              element: TextAreaField,
              defaultValue: props.ticket?.description,
            },
            {
              name: 'status',
              label: 'Status',
              element: SelectField,
              defaultValue: props.ticket?.status,
              newHide: true,
              attributes: {
                children: (
                  <>
                    {statuses.map((option, i) => (
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

export default TicketForm
