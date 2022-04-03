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
import { AppContext } from 'src/components/AppCells/AppProviderCell'
import SearchCell from 'src/components/AppCells/SearchCell'
import { SearchIcon } from '@heroicons/react/solid'

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
        <div className="min-h-screen px-4 py-12 text-center">
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

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
              <Form className="relative">
                <Label name="search" className="sr-only">
                  Search {search.label}
                </Label>
                <SearchIcon
                  className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <TextField
                  name="search"
                  className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-sm text-gray-800 placeholder-gray-400 focus:ring-0"
                  value={searchQuery}
                  placeholder={`Search ${search.label}...`}
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
                  <p className="p-4 text-sm text-gray-500">No results found</p>
                )
              ) : (
                <p className="p-4 text-sm text-gray-500">
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
