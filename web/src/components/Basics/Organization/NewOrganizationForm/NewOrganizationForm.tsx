import {
  Form,
  FieldError,
  Label,
  TextField,
  Submit,
  UrlField,
} from '@redwoodjs/forms'
import FileUpload from 'src/components/Elements/FileUpload'

const NewOrganizationForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.organization?.id)
  }

  return (
    <Form onSubmit={onSubmit} error={props.error}>
      <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-3 sm:col-span-2">
            <Label
              name="name"
              className="block text-sm font-medium text-gray-700"
            >
              Company Name
              <span className="font-base text-indigo-600">{' *'}</span>
            </Label>
            <TextField
              name="name"
              defaultValue={props.organization?.name}
              placeholder="Acme, Inc."
              className="mt-1 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              validation={{ required: true }}
            />
            <FieldError name="name" className="rw-field-error" />
          </div>

          <div className="col-span-3 sm:col-span-2">
            <Label
              name="website"
              className="block text-sm font-medium text-gray-700"
            >
              Website
            </Label>
            <UrlField
              name="website"
              defaultValue={props.organization?.website}
              className="mt-1 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="www.example.com"
            />
            <FieldError name="website" className="rw-field-error" />
          </div>

          {/* <div className="col-span-3 sm:col-span-2">
            <Label
              name="logo"
              className="block text-sm font-medium text-gray-700"
            >
              Logo URL
            </Label>
            <FileUpload
              name="logo"
              defaultValue={props.organization?.logo}
              type="image/png, image/jpg"
            />
            <FieldError name="logo" className="rw-field-error" />
          </div> */}
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
        <Submit
          disabled={props.loading}
          className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Save
        </Submit>
      </div>
    </Form>
  )
}

export default NewOrganizationForm
