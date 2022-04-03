import { useState } from 'react'
import { CheckboxField, HiddenField } from '@redwoodjs/forms'
import { Switch } from '@headlessui/react'

interface CheckboxSwitchProps {
  name: string
  label: string
  defaultValue?: boolean
}

const CheckboxSwitch = ({ name, label, defaultValue }: CheckboxSwitchProps) => {
  const [isChecked, setIsChecked] = useState(defaultValue || false)
  return (
    <>
      <CheckboxField name={name} defaultChecked={isChecked} />
      {/* <Switch
        name={name}
        checked={isChecked}
        onChange={setIsChecked}
        className={`${isChecked ? 'bg-indigo-600' : 'bg-gray-400'}
          relative inline-flex flex-shrink-0 h-6 w-10 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">{label}</span>
        <span
          aria-hidden="true"
          className={`${isChecked ? 'translate-x-4' : 'translate-x-0'}
            pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
        />
      </Switch> */}
    </>
  )
}

export default CheckboxSwitch
