import { FieldError, Label } from '@redwoodjs/forms'
import ConditionalWrapper from 'src/components/Elements/ConditionalWrapper'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/solid'
import { useEditFormSectionContext } from '../EditFormSection'

import type { FormField } from 'src/ui/Form'

type EditFormFieldProps = {
  field: FormField
  editAll?: boolean
  loading?: boolean
}

const EditFormField = ({ field, editAll, loading }: EditFormFieldProps) => {
  const [isEditing, setIsEditing] = React.useState(false)
  const [fieldValue, setFieldValue] = React.useState(field?.defaultValue)
  const { changedFields, setChangedFields } = useEditFormSectionContext()

  const checkbox = typeof field.defaultValue === 'boolean' ? true : false

  const fieldRef = React.useRef(null)

  React.useEffect(() => {
    setIsEditing(editAll)
  }, [editAll])

  React.useEffect(() => {
    if (isEditing && !editAll) {
      fieldRef.current.focus()
    }
  }, [isEditing, editAll])

  React.useEffect(() => {
    if (
      fieldValue !== field?.defaultValue &&
      !changedFields.includes(field.name)
    ) {
      setChangedFields([...changedFields, field.name])
    }

    if (
      fieldValue === field?.defaultValue &&
      changedFields.includes(field.name)
    ) {
      setChangedFields(
        changedFields.filter((fieldName) => fieldName !== field.name)
      )
    }
  }, [fieldValue])

  return (
    <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
      <dt className="text-sm font-medium text-gray-500">
        <Label name={field.name}>
          {field.label}
          {field?.validation?.required && (
            <span className="font-base text-indigo-600">{' *'}</span>
          )}
        </Label>
      </dt>
      <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
        <div className={`${checkbox ? 'flex items-center' : ''}`}>
          <div className="flex-1">
            <ConditionalWrapper
              condition={field?.prepend ? true : false}
              wrapper={(children) => (
                <div className="prepend-field flex rounded-md">
                  <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-600">
                    {field?.prepend}
                  </span>
                  {children}
                </div>
              )}
            >
              <field.element
                name={field.name}
                defaultValue={field.defaultValue}
                defaultChecked={field.defaultValue}
                validation={field.validation}
                onChange={(e) => setFieldValue(e.target.value)}
                disabled={!field.authorized || loading}
                ref={fieldRef}
                {...field.attributes}
              />
            </ConditionalWrapper>

            <FieldError name={field.name} className="rw-field-error" />
          </div>
        </div>
      </dd>
    </div>
  )
}

export default EditFormField
