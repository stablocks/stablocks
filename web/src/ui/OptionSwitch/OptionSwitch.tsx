import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

interface Option {
  label: string
  value: string
}

interface OptionSwitchProps {
  id: string | number
  name: string
  options: Option[]
  selected?: string
  unselectedLabel?: string
  onSubmit: (input: any, id: string | number) => void
  loading?: boolean
  error: any
  button?: boolean
}

const OptionSwitch = (props: OptionSwitchProps) => {
  const {
    id,
    name,
    options,
    selected,
    unselectedLabel,
    onSubmit,
    loading,
    button,
  } = props

  const unselected = { label: unselectedLabel, value: '' }

  const allOptions = unselectedLabel ? [...options, unselected] : options

  const [selectedOption, setSelectedOption] = React.useState(getSelected())

  function getSelected() {
    return allOptions.find((option) =>
      !selected ? option.value === '' : option.value === selected
    )
  }

  const onChange = (selected: Option) => {
    const input = {}

    input[name] = selected.value

    onSubmit(input, id)
  }

  React.useEffect(() => {
    setSelectedOption(getSelected())
  }, [selected])

  return (
    <Listbox value={selectedOption} onChange={onChange} disabled={loading}>
      <div className="relative mt-1">
        <Listbox.Button
          className={`${
            button
              ? 'btn btn-primary'
              : 'rounded-md border border-gray-300 bg-gray-50 cursor-default focus:outline-none sm:text-sm'
          } text-left max-w-[16rem] truncate relative w-full py-2 pl-3 pr-10`}
        >
          <span className="block truncate">{selectedOption.label}</span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <SelectorIcon
              className={`${button ? 'text-white' : 'text-gray-400'} w-5 h-5`}
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="z-10 absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 border border-gray-300 focus:outline-none sm:text-sm">
            {allOptions.map((option, i) => (
              <Listbox.Option
                key={i}
                className={({ active }) =>
                  `cursor-default select-none relative py-2 pl-10 pr-4 ${
                    active ? 'text-indigo-900 bg-indigo-100' : 'text-gray-900'
                  }`
                }
                value={option}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block whitespace-normal ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      {option.label}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                        <CheckIcon className="w-5 h-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}

export default OptionSwitch
