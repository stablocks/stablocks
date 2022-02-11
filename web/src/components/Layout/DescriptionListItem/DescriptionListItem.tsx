import { useEffect, useRef, useState } from 'react'
import { FieldError, Label, Submit } from '@redwoodjs/forms'
import ConditionalWrapper from 'src/components/Elements/ConditionalWrapper'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/solid'

import type { FormField } from 'src/components/Layout/Form'

interface DescriptionListItemProps {
  first?: boolean
  field: FormField
  editAll?: boolean
}

const DescriptionListItem = ({
  first,
  field,
  editAll,
}: DescriptionListItemProps) => {
  const [editing, setEditing] = useState(false)

  const checkbox = typeof field.defaultValue === 'boolean' ? true : false

  const fieldRef = useRef(null)

  useEffect(() => {
    setEditing(editAll)
  }, [editAll, setEditing])

  useEffect(() => {
    if ((editing && !editAll) || (editing && editAll && first)) {
      fieldRef.current.focus()
    }
  }, [editing, editAll, first])

  const onSave = (e) => {
    e.currentTarget.click()
    setEditing(false)
  }

  const onEditingClick = () => {
    setEditing(true)
  }

  return (
    <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
      <dt className="text-sm font-medium text-gray-500">{field.label}</dt>
      <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
        {!editing ? (
          <div className="flex items-center justify-between">
            <span>
              {checkbox ? (
                field.defaultValue ? (
                  <CheckCircleIcon className="h-5 w-5 text-green-600" />
                ) : (
                  <XCircleIcon className="h-5 w-5 text-red-600" />
                )
              ) : (
                <>{field?.defaultValue}</>
              )}
            </span>
            {!editAll && (
              <button
                onClick={onEditingClick}
                type="button"
                className="rounded-sm text-indigo-600"
              >
                edit
              </button>
            )}
          </div>
        ) : (
          <div className={`${checkbox ? 'flex items-center' : ''}`}>
            <div className="flex-1">
              <Label name={field.name} className="hidden">
                {field.label}
              </Label>

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
                  validation={{ required: field.required }}
                  defaultChecked={field.defaultValue}
                  ref={fieldRef}
                />
              </ConditionalWrapper>

              <FieldError name={field.name} className="rw-field-error" />
            </div>
            {!editAll && (
              <div
                className={`${
                  !checkbox ? 'mt-2 ' : ''
                }flex items-center justify-end space-x-2`}
              >
                <button
                  onClick={() => setEditing(false)}
                  type="button"
                  className="rounded-sm text-indigo-600"
                >
                  cancel
                </button>
                <Submit onClick={onSave} className="btn btn-primary">
                  Save
                </Submit>
              </div>
            )}
          </div>
        )}
      </dd>
    </div>
  )
}

export default DescriptionListItem
