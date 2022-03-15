import DescriptionList from 'src/ui/DescriptionList'
import DescriptionListItem from 'src/ui/DescriptionList/DescriptionListItem'

import type { FormProps } from '../Form'

const EditForm = (props: FormProps) => {
  const { sections, onSubmit, loading, error, isSaved } = props

  return (
    <div className="space-y-12 max-w-7xl mx-auto">
      {sections.map(
        (section, i) =>
          !section.editHide && (
            <DescriptionList
              key={i}
              title={section.title}
              onSubmit={onSubmit}
              loading={loading}
              error={error}
              isSaved={isSaved}
            >
              {section.fields.map(
                (field, i) =>
                  !field.editHide && (
                    <DescriptionListItem
                      key={i}
                      field={field}
                      first={i === 0 ? true : false}
                    />
                  )
              )}
            </DescriptionList>
          )
      )}
    </div>
  )
}

export default EditForm
