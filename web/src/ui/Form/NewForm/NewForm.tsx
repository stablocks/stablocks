import { Label, FieldError } from '@redwoodjs/forms'
import FormLayout, { FormSection } from '../FormLayout'

import type { FormProps } from '../Form'

const NewForm = (props: FormProps) => {
  const { sections, onSubmit, loading, error } = props

  return (
    <FormLayout onSubmit={onSubmit} loading={loading} error={error}>
      {sections.map(
        (section, i) =>
          !section.newHide && (
            <FormSection
              key={i}
              title={section.title}
              description={section.description}
              singleLine
            >
              {section.fields.map(
                (field, i) =>
                  !field.newHide && (
                    <div key={i}>
                      <Label name={field.name}>
                        {field.label}
                        {field.required && (
                          <span className="font-base text-indigo-600">
                            {' *'}
                          </span>
                        )}
                      </Label>
                      <field.element
                        name={field.name}
                        defaultValue={field.defaultValue}
                        validation={{ required: field.required }}
                      />
                      <FieldError
                        name={field.name}
                        className="rw-field-error"
                      />
                    </div>
                  )
              )}
            </FormSection>
          )
      )}
    </FormLayout>
  )
}

export default NewForm
