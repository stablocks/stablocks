import {
  CheckboxField,
  EmailField,
  TextField,
  TextAreaField,
  UrlField,
} from '@redwoodjs/forms'
import Form from 'src/ui/Form'
import FileUpload from 'src/components/Elements/FileUpload'
import CountryContext from 'src/ui/Form/Fields/CountryContext'
import CountrySelect from 'src/ui/Form/Fields/CountrySelect/CountrySelect'
import RegionSelect from 'src/ui/Form/Fields/RegionSelect/RegionSelect'

const OrganizationForm = (props) => {
  const onSubmit = (data) => {
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        const element = data[key]
        if (element === 'true') data[key] = true
        if (element === 'false') data[key] = false
      }
    }

    props.onSave(data, props.organization?.id)
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
                name: 'name',
                label: 'Name',
                element: TextField,
                defaultValue: props.organization?.name,
                validation: {
                  required: true,
                },
              },
              {
                name: 'website',
                label: 'Website',
                element: UrlField,
                defaultValue: props.organization?.website,
                prepend: 'https://',
              },
              {
                name: 'logo',
                label: 'Logo',
                element: FileUpload,
                defaultValue: props.organization?.logo,
                attributes: {
                  type: 'image/png, image/jpg',
                },
              },
              {
                name: 'email',
                label: 'Default Company Email',
                element: EmailField,
                defaultValue: props.organization?.email,
              },
            ],
          },
          {
            title: 'Organization Address',
            fields: [
              {
                name: 'address',
                label: 'Address',
                element: TextField,
                defaultValue: props.organization?.address,
              },
              {
                name: 'addressTwo',
                label: 'Address 2',
                element: TextField,
                defaultValue: props.organization?.addressTwo,
              },
              {
                name: 'city',
                label: 'City',
                element: TextField,
                defaultValue: props.organization?.city,
              },
              {
                name: 'country',
                label: 'Country',
                element: CountrySelect,
                defaultValue: props.organization?.country,
              },
              {
                name: 'state',
                label: 'State / Region',
                element: RegionSelect,
                defaultValue: props.organization?.state,
              },
              {
                name: 'zipCode',
                label: 'Zip Code',
                element: TextField,
                defaultValue: props.organization?.zipCode,
                validation: {
                  valueAsNumber: true,
                  pattern: /[0-9]{5}/,
                },
              },
            ],
          },
          {
            title: 'Modules',
            fields: [
              {
                name: 'finance',
                label: 'Finance',
                element: CheckboxField,
                defaultValue: props.organization?.finance,
              },
              {
                name: 'crm',
                label: 'CRM',
                element: CheckboxField,
                defaultValue: props.organization?.crm,
              },
              {
                name: 'marketing',
                label: 'Marketing',
                element: CheckboxField,
                defaultValue: props.organization?.marketing,
              },
              {
                name: 'sales',
                label: 'Sales',
                element: CheckboxField,
                defaultValue: props.organization?.sales,
              },
              {
                name: 'hr',
                label: 'HR',
                element: CheckboxField,
                defaultValue: props.organization?.hr,
              },
              {
                name: 'recruiting',
                label: 'Recruiting',
                element: CheckboxField,
                defaultValue: props.organization?.recruiting,
              },
              {
                name: 'helpdesk',
                label: 'Helpdesk',
                element: CheckboxField,
                defaultValue: props.organization?.helpdesk,
              },
              {
                name: 'projects',
                label: 'Project Management',
                element: CheckboxField,
                defaultValue: props.organization?.projects,
              },
            ],
          },
          {
            title: 'Other Settings',
            fields: [
              {
                name: 'chatGreeting',
                label: 'Chat Greeting',
                element: TextAreaField,
                defaultValue: props.organization?.chatGreeting,
              },
            ],
          },
        ]}
      />
    </CountryContext>
  )
}

export default OrganizationForm
