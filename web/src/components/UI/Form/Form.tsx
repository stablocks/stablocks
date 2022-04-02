import NewForm from './NewForm'
import EditForm from './EditForm'

export interface FormField {
  name: string
  label: string
  element: React.ForwardRefExoticComponent<any>
  defaultValue: string | boolean | number | undefined
  required?: boolean
  newHide?: boolean
  editHide?: boolean
  prepend?: string
}

export interface Section {
  title?: string
  description?: string
  fields: FormField[]
  newHide?: boolean
  editHide?: boolean
}

export interface FormProps {
  sections: Section[]
  newForm?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (data: any) => void
  loading: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any
  isSaved?: boolean
}

const Form = (props: FormProps) => {
  if (props.newForm) return <NewForm {...props} />

  return <EditForm {...props} />
}

export default Form
