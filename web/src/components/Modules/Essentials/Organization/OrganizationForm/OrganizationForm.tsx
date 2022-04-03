import {
  CheckboxField,
  EmailField,
  TextField,
  TextAreaField,
  UrlField,
} from '@redwoodjs/forms'
import FileUpload from 'src/components/Elements/FileUpload'
import CountryContext from 'src/components/UI/Form/Fields/CountryContext'
import { usePermissions } from 'src/utils/permissions'
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
            authorized: usePermissions('admin'),
            fields: [
              {
                name: 'name',
                label: 'Name',
                element: TextField,
                defaultValue: props.organization?.name,
                authorized: usePermissions('admin'),
                validation: {
                  required: true,
                },
              },
              {
                name: 'website',
                label: 'Website',
                element: UrlField,
                defaultValue: props.organization?.website,
                authorized: usePermissions('admin'),
              },
              {
                name: 'logo',
                label: 'Logo',
                element: FileUpload,
                defaultValue: props.organization?.logo,
                attributes: {
                  type: 'image/png, image/jpg',
                },
                authorized: usePermissions('admin'),
              },
              {
                name: 'email',
                label: 'Default Company Email',
                element: EmailField,
                defaultValue: props.organization?.email,
                authorized: usePermissions('admin'),
              },
            ],
          },
          {
            title: 'Modules',
            authorized: usePermissions('admin'),
            fields: [
              {
                name: 'finance',
                label: 'Finance',
                element: CheckboxField,
                defaultValue: props.organization?.finance,
                authorized: usePermissions('admin'),
              },
              {
                name: 'crm',
                label: 'CRM',
                element: CheckboxField,
                defaultValue: props.organization?.crm,
                authorized: usePermissions('admin'),
              },
              {
                name: 'marketing',
                label: 'Marketing',
                element: CheckboxField,
                defaultValue: props.organization?.marketing,
                authorized: usePermissions('admin'),
              },
              {
                name: 'sales',
                label: 'Sales',
                element: CheckboxField,
                defaultValue: props.organization?.sales,
                authorized: usePermissions('admin'),
              },
              {
                name: 'hr',
                label: 'HR',
                element: CheckboxField,
                defaultValue: props.organization?.hr,
                authorized: usePermissions('admin'),
              },
              {
                name: 'recruiting',
                label: 'Recruiting',
                element: CheckboxField,
                defaultValue: props.organization?.recruiting,
                authorized: usePermissions('admin'),
              },
              {
                name: 'helpdesk',
                label: 'Helpdesk',
                element: CheckboxField,
                defaultValue: props.organization?.helpdesk,
                authorized: usePermissions('admin'),
              },
              {
                name: 'projects',
                label: 'Project Management',
                element: CheckboxField,
                defaultValue: props.organization?.projects,
                authorized: usePermissions('admin'),
              },
            ],
          },
          {
            title: 'Other Settings',
            authorized: usePermissions('admin'),
            fields: [
              {
                name: 'chatGreeting',
                label: 'Chat Greeting',
                element: TextAreaField,
                defaultValue: props.organization?.chatGreeting,
                authorized: usePermissions('admin'),
              },
            ],
          },
        ]}
      />
    </CountryContext>
  )
}

export default OrganizationForm
