import {
  Dispatch,
  Fragment,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react'
import { Form, Label, TextField } from '@redwoodjs/forms'
import { useLocation } from '@redwoodjs/router'
import { Dialog, Transition } from '@headlessui/react'
import { AppContext } from 'src/components/Providers/AppProviderCell'
import SearchCell from 'src/components/Cells/SearchCell'

type SearchPopupProps = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const SearchPopup = ({ isOpen, setIsOpen }: SearchPopupProps) => {
  const { search } = useContext(AppContext)
  const { pathname } = useLocation()

  const [searchQuery, setSearchQuery] = useState('')
  const [emptyResult, setEmptyResult] = useState(false)

  function closePopup() {
    setIsOpen(false)
    setSearchQuery('')
  }

  const updateQuery = (e) => {
    const query = e.target.value

    if (emptyResult && !query.startsWith(searchQuery)) {
      setEmptyResult(false)
    }

    setSearchQuery(query)
  }

  useEffect(() => {
    setIsOpen(false)
    setSearchQuery('')
  }, [pathname, setIsOpen])

  return (
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
            <div className="relative mt-8 mb-16 inline-block w-full max-w-lg transform text-left align-top transition-all">
              <Form className="search-form">
                <Label name="search" className="mb-1 text-sm text-white">
                  Search {search.label}:
                </Label>
                <TextField
                  name="search"
                  className="w-full rounded-md px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-700"
                  value={searchQuery}
                  onChange={updateQuery}
                  autoComplete="off"
                />
              </Form>
              {searchQuery.length > 1 ? (
                !emptyResult ? (
                  <SearchCell
                    type={search.type}
                    query={searchQuery}
                    setEmptyResult={setEmptyResult}
                  />
                ) : (
                  <p className="mt-6 text-center text-xs text-white">
                    No results found
                  </p>
                )
              ) : (
                <p className="text-2xs mt-2 text-center text-white">
                  Type at least two characters
                </p>
              )}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

export default SearchPopup
