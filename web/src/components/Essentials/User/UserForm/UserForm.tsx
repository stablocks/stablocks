import { FieldError, Label, TextField } from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import FormLayout, { FormSection, FormFields } from 'src/components/UI/Form/FormLayout'

const UserForm = (props) => {
  const { hasRole } = useAuth()

  const onSubmit = (data) => {
    props.onSave(data, props?.user?.id)
  }

  return (
    <>
      <FormLayout
        onSubmit={onSubmit}
        loading={props.loading}
        error={props.error}
      >
        <FormSection>
          <FormFields singleLine>
            <div>
              <Label name="firstName">First name</Label>
              <TextField
                name="firstName"
                defaultValue={props.user?.firstName}
                validation={{ required: true }}
              />
              <FieldError name="firstName" className="rw-field-error" />
            </div>
            <div>
              <Label name="middleName">Middle name</Label>
              <TextField
                name="middleName"
                defaultValue={props.user?.middleName}
              />
              <FieldError name="middleName" className="rw-field-error" />
            </div>
            <div>
              <Label name="lastName">Last name</Label>
              <TextField
                name="lastName"
                defaultValue={props.user?.lastName}
                validation={{ required: true }}
              />
              <FieldError name="lastName" className="rw-field-error" />
            </div>
            {hasRole(['admin']) && (
              <div>
                <Label name="email">Email</Label>
                <TextField
                  name="email"
                  defaultValue={props.user?.email}
                  validation={{ required: true }}
                />
                <FieldError name="email" className="rw-field-error" />
              </div>
            )}
            {!props.new && (
              <>
                <div>
                  <Label name="otherEmails">Other emails</Label>
                  <TextField
                    name="otherEmails"
                    defaultValue={props.user?.otherEmails}
                  />
                  <FieldError name="otherEmails" className="rw-field-error" />
                </div>
                <div>
                  <Label name="profileImage">Profile image</Label>
                  <TextField
                    name="profileImage"
                    defaultValue={props.user?.profileImage}
                  />
                  <FieldError name="profileImage" className="rw-field-error" />
                </div>
              </>
            )}
            {hasRole(['admin']) && (
              <>
                <div>
                  <Label name="position">Position</Label>
                  <TextField
                    name="position"
                    defaultValue={props.user?.position}
                    validation={{ required: true }}
                  />
                  <FieldError name="position" className="rw-field-error" />
                </div>
                <div>
                  <Label name="supervisorId">Supervisor id</Label>
                  <TextField
                    name="supervisorId"
                    defaultValue={props.user?.supervisorId}
                  />
                  <FieldError name="supervisorId" className="rw-field-error" />
                </div>
              </>
            )}
            {!props.new && (
              <div>
                <Label name="resume">Résumé</Label>
                <TextField name="resume" defaultValue={props.user?.resume} />
                <FieldError name="resume" className="rw-field-error" />
              </div>
            )}
          </FormFields>
        </FormSection>
      </FormLayout>
    </>
  )
}

export default UserForm
