import { Form, FormError, Submit } from '@redwoodjs/forms'
import { Section } from 'src/ui/Form'
import EditFormField from './EditFormField'

type EditFormSectionProps = {
  section: Section
  onSubmit: (data: { [key: string]: any }) => void
  loading?: boolean
  error?: any
  isSaved?: boolean
}

type EditFormSectionContextProps = {
  changedFields: string[]
  setChangedFields: React.Dispatch<React.SetStateAction<string[]>>
}

const EditFormSectionContext = React.createContext<EditFormSectionContextProps>(
  {
    changedFields: [],
    setChangedFields: () => {},
  }
)

const EditFormSection = (props: EditFormSectionProps) => {
  const { section, onSubmit, loading, error, isSaved } = props

  const [changedFields, setChangedFields] = React.useState<string[]>([])

  const value = {
    changedFields,
    setChangedFields,
  }

  React.useEffect(() => {
    if (isSaved) setChangedFields([])
  }, [isSaved])

  return (
    <EditFormSectionContext.Provider value={value}>
      <Form onSubmit={onSubmit} error={error} className="max-w-3xl space-y-4">
        <section>
          <div className="sticky top-16 py-3 bg-gray-100 items-center sm:flex border-b border-gray-200 z-10">
            {section?.title && (
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  {section.title}
                </h3>
                {section?.description && (
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    {section.description}
                  </p>
                )}
              </div>
            )}

            <div className="btn-group sm:ml-auto mt-5 sm:mt-0">
              <Submit
                className="btn btn-primary disabled:bg-gray-100 disabled:text-gray-500"
                disabled={loading || changedFields.length === 0}
              >
                Save
              </Submit>
            </div>
          </div>

          <FormError
            error={error}
            wrapperClassName="text-xs mt-5 text-red-600"
            titleClassName=""
            listClassName=""
          />

          <div className="">
            <dl className="sm:divide-y sm:divide-gray-200">
              {section?.fields.map((field, i) => (
                <EditFormField
                  key={i}
                  field={field}
                  editAll={true}
                  loading={loading}
                />
              ))}
            </dl>
          </div>
        </section>
      </Form>
    </EditFormSectionContext.Provider>
  )
}

export const useEditFormSectionContext = () => {
  return React.useContext(EditFormSectionContext)
}

export default EditFormSection
