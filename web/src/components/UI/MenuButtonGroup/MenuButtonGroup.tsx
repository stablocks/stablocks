import { Fragment } from 'react'
import { useAuth } from '@redwoodjs/auth'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

export interface ActionButton {
  label: React.ReactNode
  main?: boolean
  icon?: (props: React.ComponentProps<'svg'>) => JSX.Element
  onClick?: () => void
  authorized?: boolean
  disabled?: boolean
  children?: ActionButton[]
}

interface MenuButtonGroupProps {
  buttons: ActionButton[]
}

const MenuButtonGroup = ({ buttons }: MenuButtonGroupProps) => {
  const { hasRole } = useAuth()

  return (
    <>
      {buttons.map(
        (button, i) =>
          !button?.authorized ||
          (button.authorized === true && (
            <span key={i} className="relative z-0 inline-flex rounded-md">
              {button.onClick && (
                <button
                  onClick={button.onClick}
                  type="button"
                  disabled={button.disabled}
                  className={`${
                    button.main
                      ? 'btn-primary'
                      : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:border-indigo-500'
                  } ${
                    button.children ? 'rounded-l-md' : 'rounded-md'
                  } relative inline-flex w-full items-center justify-center space-x-1 border px-4 py-2 text-sm font-medium focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500`}
                >
                  {button.icon && <button.icon className="h-4 w-4" />}
                  <span>{button.label}</span>
                </button>
              )}
              {button.children && button.children.length > 0 && (
                <Menu as="span" className="relative -ml-px block">
                  <Menu.Button
                    disabled={button.disabled}
                    className={`${
                      button.main
                        ? 'btn-primary border-l-indigo-400'
                        : 'border-gray-300 bg-white text-gray-500 hover:bg-gray-50'
                    } ${
                      button.onClick ? 'rounded-r-md' : 'rounded-md'
                    } relative inline-flex items-center border px-2 py-2 text-sm font-medium focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500`}
                  >
                    {button.onClick ? (
                      <span className="sr-only">Open options</span>
                    ) : (
                      <span className="px-2">{button.label}</span>
                    )}
                    <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 min-w-[8rem] origin-top-right rounded-md border border-gray-300 bg-white  focus:outline-none">
                      <div className="py-1">
                        {button.children.map((item, i) => (
                          <Menu.Item key={i}>
                            {({ active }) => (
                              <button
                                onClick={item.onClick}
                                disabled={button.disabled}
                                className={`${
                                  active
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-700'
                                } block w-full px-4 py-2 text-sm whitespace-nowrap`}
                              >
                                {item.label}
                              </button>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              )}
            </span>
          ))
      )}
    </>
  )
}

export default MenuButtonGroup
