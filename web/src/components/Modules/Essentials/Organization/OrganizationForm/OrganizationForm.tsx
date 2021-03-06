import { CheckboxField, TextField, TextAreaField } from '@redwoodjs/forms'
import Form from 'src/components/UI/Form'

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
              required: true,
            },
            {
              name: 'website',
              label: 'Website',
              element: TextField,
              defaultValue: props.organization?.website,
              prepend: 'https://',
            },
            {
              name: 'logo',
              label: 'Logo',
              element: TextField,
              defaultValue: props.organization?.logo,
            },
            {
              name: 'email',
              label: 'Default Company Email',
              element: TextField,
              defaultValue: props.organization?.email,
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
  )
}

export default OrganizationForm
