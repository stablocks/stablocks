import { TextField } from '@redwoodjs/forms'
import PhotoUpload from 'src/components/Elements/PhotoUpload'
import DescriptionList from 'src/components/Layout/DescriptionList'
import DescriptionListItem from 'src/components/Layout/DescriptionListItem'
import CheckboxSwitch from 'src/components/Elements/CheckboxSwitch'

const OrganizationForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data)
  }

  return (
    <div className="space-y-12">
      <DescriptionList
        title="Organization Information"
        onSubmit={onSubmit}
        error={props.error}
        isSaved={props.isSaved}
      >
        <DescriptionListItem
          name="name"
          label="Name"
          value={props.organization?.name}
        >
          <TextField
            name="name"
            defaultValue={props.organization?.name}
            validation={{ required: true }}
          />
        </DescriptionListItem>

        <DescriptionListItem
          name="website"
          label="Website"
          value={props.organization?.website}
        >
          <div className="prepend-field flex rounded-md">
            <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
              https://
            </span>
            <TextField
              name="website"
              defaultValue={props.organization?.website}
            />
          </div>
        </DescriptionListItem>

        <DescriptionListItem
          name="logo"
          label="Logo"
          value={props.organization?.logo}
        >
          <PhotoUpload name="logo" defaultValue={props.organization?.logo} />
        </DescriptionListItem>
      </DescriptionList>

      <DescriptionList
        title="Modules"
        description="Toggle modules on and off globally. This does not remove any data, but if off all functionality for that module will be hidden."
        onSubmit={onSubmit}
        error={props.error}
        isSaved={props.isSaved}
      >
        <DescriptionListItem
          name="recruiting"
          label="Recruiting"
          value={props.organization?.recruiting}
          checkbox
        >
          <CheckboxSwitch
            name="recruiting"
            label="Recruiting"
            defaultValue={props.organization?.recruiting}
          />
        </DescriptionListItem>

        <DescriptionListItem
          name="crm"
          label="CRM"
          value={props.organization?.crm}
          checkbox
        >
          <CheckboxSwitch
            name="crm"
            label="CRM"
            defaultValue={props.organization?.crm}
          />
        </DescriptionListItem>

        <DescriptionListItem
          name="helpdesk"
          label="Helpdesk"
          value={props.organization?.helpdesk}
          checkbox
        >
          <CheckboxSwitch
            name="helpdesk"
            label="Helpdesk"
            defaultValue={props.organization?.helpdesk}
          />
        </DescriptionListItem>

        <DescriptionListItem
          name="projects"
          label="Project Management"
          value={props.organization?.projects}
          checkbox
        >
          <CheckboxSwitch
            name="projects"
            label="Project Management"
            defaultValue={props.organization?.projects}
          />
        </DescriptionListItem>
      </DescriptionList>
    </div>
  )
}

export default OrganizationForm
