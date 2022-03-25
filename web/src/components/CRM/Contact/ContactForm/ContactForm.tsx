import { EmailField, TelField, TextField } from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import Form from 'src/ui/Form'
import CountryContext from 'src/ui/Form/Fields/CountryContext'
import CountrySelect from 'src/ui/Form/Fields/CountrySelect/CountrySelect'
import RegionSelect from 'src/ui/Form/Fields/RegionSelect/RegionSelect'
import { usePermissions } from 'src/utils/permissions'

const ContactForm = (props) => {
  const { currentUser } = useAuth()

  const onSubmit = (data) => {
    if (!props.contact?.employeeId) data.employeeId = currentUser.id

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
            authorized: usePermissions(
              ['admin', 'crmAdmin'],
              props.contact?.userId
            ),
            fields: [
              {
                name: 'firstName',
                label: 'First Name',
                element: TextField,
                defaultValue: props.contact?.firstName,
                authorized: usePermissions(
                  ['admin', 'crmAdmin'],
                  props.contact?.userId
                ),
                validation: {
                  required: true,
                },
              },
              {
                name: 'lastName',
                label: 'Last Name',
                element: TextField,
                defaultValue: props.contact?.lastName,
                authorized: usePermissions(
                  ['admin', 'crmAdmin'],
                  props.contact?.userId
                ),
                validation: {
                  required: true,
                },
              },
              {
                name: 'email',
                label: 'Email',
                element: EmailField,
                defaultValue: props.contact?.email,
                authorized: usePermissions(
                  ['admin', 'crmAdmin'],
                  props.contact?.userId
                ),
              },
              {
                name: 'phone',
                label: 'Phone number',
                element: TelField,
                defaultValue: props.contact?.phone,
                authorized: usePermissions(
                  ['admin', 'crmAdmin'],
                  props.contact?.userId
                ),
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
                authorized: usePermissions(
                  ['admin', 'crmAdmin'],
                  props.contact?.userId
                ),
              },
              {
                name: 'addressTwo',
                label: 'Address 2',
                element: TextField,
                defaultValue: props.contact?.addressTwo,
                authorized: usePermissions(
                  ['admin', 'crmAdmin'],
                  props.contact?.userId
                ),
              },
              {
                name: 'city',
                label: 'City',
                element: TextField,
                defaultValue: props.contact?.city,
                authorized: usePermissions(
                  ['admin', 'crmAdmin'],
                  props.contact?.userId
                ),
              },
              {
                name: 'country',
                label: 'Country',
                element: CountrySelect,
                defaultValue: props.contact?.country,
                authorized: usePermissions(
                  ['admin', 'crmAdmin'],
                  props.contact?.userId
                ),
              },
              {
                name: 'state',
                label: 'State / Region',
                element: RegionSelect,
                defaultValue: props.contact?.state,
                authorized: usePermissions(
                  ['admin', 'crmAdmin'],
                  props.contact?.userId
                ),
              },
              {
                name: 'zipCode',
                label: 'ZIP / Postal Code',
                element: TextField,
                defaultValue: props.contact?.zipCode,
                authorized: usePermissions(
                  ['admin', 'crmAdmin'],
                  props.contact?.userId
                ),
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
