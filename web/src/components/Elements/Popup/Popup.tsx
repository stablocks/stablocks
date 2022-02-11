import { Dispatch, Fragment, SetStateAction } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import MenuButtonGroup, {
  ActionButton,
} from 'src/components/Elements/MenuButtonGroup'
import { XIcon } from '@heroicons/react/outline'

interface PopupProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  title: string
  description?: string
  buttons?: ActionButton[]
  closeButton?: boolean
  children?: React.ReactNode
}

const Popup = ({
  isOpen,
  setIsOpen,
  title,
  description,
  buttons,
  closeButton,
  children,
}: PopupProps) => {
  function closePopup() {
    setIsOpen(false)
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-[100] overflow-y-auto"
          onClose={closePopup}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-900 bg-opacity-95" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="relative my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-100 p-6 text-left align-middle transition-all">
                <Dialog.Title
                  as="h3"
                  className={`${
                    closeButton || !buttons ? 'pr-8 ' : ''
                  }text-lg font-medium leading-6 text-gray-900`}
                >
                  {title}
                </Dialog.Title>
                {(closeButton || !buttons) && (
                  <button
                    onClick={closePopup}
                    className="absolute top-4 right-4 rounded-full border border-gray-300 bg-white p-2 hover:bg-gray-50"
                  >
                    <XIcon className="h-4  w-4" />
                  </button>
                )}
                <div className="mt-2">
                  {description && (
                    <p className="text-sm text-gray-500">{description}</p>
                  )}
                  {children && (
                    <div className={`${description ? 'mt-4' : ''}`}>
                      {children}
                    </div>
                  )}
                </div>

                {buttons && (
                  <div className="mt-4 space-x-2 text-right">
                    <MenuButtonGroup buttons={buttons} />
                  </div>
                )}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default Popup
