import { EmailField, TelField, TextField } from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import Form from 'src/ui/Form'
import CountryContext from 'src/ui/Form/Fields/CountryContext'
import CountrySelect from 'src/ui/Form/Fields/CountrySelect/CountrySelect'
import RegionSelect from 'src/ui/Form/Fields/RegionSelect/RegionSelect'

const ContactForm = (props) => {
  const { currentUser } = useAuth()

  const onSubmit = (data) => {
    if (!props.contact?.userId) data.userId = currentUser.id

    props.onSave(data, props.contact?.id)
  }

  return (
    <CountryContext>
      <Form
        onSubmit={onSubmit}
        loading={props.loading}
        error={props.error}
        newForm={props.newForm}
        isSaved={props.isSaved}
        sections={[
          {
            title: 'General Information',
            fields: [
              {
                name: 'firstName',
                label: 'First Name',
                element: TextField,
                defaultValue: props.contact?.firstName,
                validation: {
                  required: true,
                },
              },
              {
                name: 'lastName',
                label: 'Last Name',
                element: TextField,
                defaultValue: props.contact?.lastName,
                validation: {
                  required: true,
                },
              },
              {
                name: 'email',
                label: 'Email',
                element: EmailField,
                defaultValue: props.contact?.email,
              },
              {
                name: 'phone',
                label: 'Phone number',
                element: TelField,
                defaultValue: props.contact?.phone,
              },
            ],
          },
          {
            title: 'Address Information',
            fields: [
              {
                name: 'address',
                label: 'Address',
                element: TextField,
                defaultValue: props.contact?.address,
              },
              {
                name: 'addressTwo',
                label: 'Address 2',
                element: TextField,
                defaultValue: props.contact?.addressTwo,
              },
              {
                name: 'city',
                label: 'City',
                element: TextField,
                defaultValue: props.contact?.city,
              },
              {
                name: 'country',
                label: 'Country',
                element: CountrySelect,
                defaultValue: props.contact?.country,
              },
              {
                name: 'state',
                label: 'State / Region',
                element: RegionSelect,
                defaultValue: props.contact?.state,
              },
              {
                name: 'zipCode',
                label: 'ZIP / Postal Code',
                element: TextField,
                defaultValue: props.contact?.zipCode,
                validation: {
                  valueAsNumber: true,
                  pattern: /[0-9]{5}/,
                },
              },
            ],
          },
        ]}
      />
    </CountryContext>
  )
}

export default ContactForm
