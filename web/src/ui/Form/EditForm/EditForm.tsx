import EditFormSection from './EditFormSection'

import type { FormProps } from '../Form'

type EditFormContextProps = {
  editingSection?: number
  setEditingSection: React.Dispatch<React.SetStateAction<number | undefined>>
  changedFields: string[]
  setChangedFields: React.Dispatch<React.SetStateAction<string[]>>
}

const EditFormContext = React.createContext<EditFormContextProps>({
  editingSection: undefined,
  setEditingSection: () => {},
  changedFields: [],
  setChangedFields: () => {},
})

const EditForm = (props: FormProps) => {
  const { sections, ...rest } = props
  const [editingSection, setEditingSection] = React.useState<
    number | undefined
  >()
  const [changedFields, setChangedFields] = React.useState<string[]>([])

  const value = {
    editingSection,
    setEditingSection,
    changedFields,
    setChangedFields,
  }

  return (
    <EditFormContext.Provider value={value}>
      <div className="space-y-12 max-w-[96rem] mx-auto">
        {sections.map(
          (section, i) =>
            !section.editHide &&
            section.authorized && (
              <EditFormSection key={i} section={section} {...rest} />
            )
        )}
      </div>
    </EditFormContext.Provider>
  )
}

export const useEditFormContext = () => {
  return React.useContext(EditFormContext)
}

export default EditForm
