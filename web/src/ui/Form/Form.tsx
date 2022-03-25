import NewForm from './NewForm'
import EditForm from './EditForm'
import { RegisterOptions } from 'react-hook-form'

export interface FieldAttributes {
  [x: string]: any
}

interface RedwoodRegisterOptions extends RegisterOptions {
  valueAsBoolean?: boolean
  valueAsJSON?: boolean
}

export interface FormField {
  name: string
  label: string
  element: React.ForwardRefExoticComponent<any> | ((props: any) => JSX.Element)
  defaultValue: string | boolean | number | undefined
  displayValue?: string
  validation?: RedwoodRegisterOptions
  newHide?: boolean
  editHide?: boolean
  prepend?: string
  attributes?: FieldAttributes
  authorized?: boolean
}

export interface Section {
  title?: string
  description?: string
  fields: FormField[]
  newHide?: boolean
  editHide?: boolean
  authorized?: boolean
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
