import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const UserForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.user?.id)
  }

  return (
    <>
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
        <div className="overflow-hidden rounded-md border border-gray-300">
          <div className="bg-white px-4 py-5 sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <Label name="firstName">First name</Label>
                <TextField
                  name="firstName"
                  defaultValue={props.user?.firstName}
                  validation={{ required: true }}
                />
                <FieldError name="firstName" className="rw-field-error" />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <Label name="lastName">Last name</Label>
                <TextField
                  name="lastName"
                  defaultValue={props.user?.lastName}
                  validation={{ required: true }}
                />
                <FieldError name="lastName" className="rw-field-error" />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <Label name="email">Email</Label>
                <TextField
                  name="email"
                  defaultValue={props.user?.email}
                  validation={{ required: true }}
                />
                <FieldError name="email" className="rw-field-error" />
              </div>
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
        </div>
      </Form>
    </>
  )
}

export default UserForm
