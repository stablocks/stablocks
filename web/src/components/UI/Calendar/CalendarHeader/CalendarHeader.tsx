import { Dispatch, Fragment, SetStateAction } from 'react'
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DotsHorizontalIcon,
} from '@heroicons/react/solid'
import { Listbox, Menu, Transition } from '@headlessui/react'
import {
  dateString,
  dayNames,
  dayOfWeek,
  monthNames,
  next,
  previous,
} from 'src/utils/dates'

import type { CalendarChildrenProps } from 'src/components/Elements/Calendar/Calendar'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

interface CalendarHeaderProps extends CalendarChildrenProps {
  view: string
  setView: Dispatch<SetStateAction<string>>
}

const CalendarHeader = (props: CalendarHeaderProps) => {
  const { today, date, setCalendarDate, view, setView } = props

  const views = [
    { id: 'day', label: 'Day view' },
    { id: 'week', label: 'Week view' },
    { id: 'month', label: 'Month view' },
  ]

  const setPrevious = () => {
    setCalendarDate(previous(date, view))
  }

  const setNext = () => {
    setCalendarDate(next(date, view))
  }

  const toToday = () => {
    setCalendarDate({
      year: today.year,
      month: today.month,
      day: today.day,
    })
  }

  return (
    <header className="relative z-20 flex flex-none items-center justify-between py-4">
      <div>
        <h2 className="text-lg font-semibold leading-6 text-gray-900">
          {view === 'day' ? (
            <>
              <time
                dateTime={dateString(date.year, date.month, date.day)}
                className="sm:hidden"
              >
                {dateString(date.year, date.month, date.day)}
              </time>
              <time
                dateTime={dateString(date.year, date.month, date.day)}
                className="hidden sm:inline"
              >
                {`${monthNames[date.month - 1]} ${date.day}, ${date.year}`}
              </time>
            </>
          ) : (
            <time dateTime={dateString(date.year, date.month)}>
              {`${monthNames[date.month - 1]} ${date.year}`}
            </time>
          )}
        </h2>
        {view === 'day' && (
          <p className="mt-1 text-sm text-gray-500">
            {dayNames[dayOfWeek(date.year, date.month, date.day)]}
          </p>
        )}
      </div>
      <div className="flex items-center">
        <div className="flex items-center rounded-md border border-gray-300 md:items-stretch">
          <button
            type="button"
            onClick={setPrevious}
            className="flex items-center justify-center rounded-l-md bg-white py-2 pl-3 pr-4 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
          >
            <span className="sr-only">Previous {view}</span>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={toToday}
            className="hidden bg-white px-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus:relative lg:block"
          >
            Today
          </button>
          <span className="relative -mx-px h-5 w-px bg-gray-300 md:hidden" />
          <button
            type="button"
            onClick={setNext}
            className="flex items-center justify-center rounded-r-md bg-white py-2 pl-4 pr-3 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
          >
            <span className="sr-only">Next {view}</span>
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <div className="relative hidden md:ml-4 lg:flex lg:items-center">
          <Listbox
            value={views.find((el) => el.id === view)}
            onChange={(e) => setView(e.id)}
          >
            <Listbox.Button
              type="button"
              className="flex items-center rounded-md border border-gray-300 bg-white py-2 pl-3 pr-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              {views.find((el) => el.id === view).label}
              <ChevronDownIcon
                className="ml-2 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Listbox.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Listbox.Options className="absolute top-full right-0 mt-1 w-36 origin-top-right overflow-hidden rounded-md border border-gray-300 bg-white focus:outline-none">
                <div className="py-1">
                  {views.map((view) => (
                    <Listbox.Option key={view.id} value={view}>
                      {({ active }) => (
                        <button
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block w-full px-4 py-2 text-left text-sm'
                          )}
                        >
                          {view.label}
                        </button>
                      )}
                    </Listbox.Option>
                  ))}
                </div>
              </Listbox.Options>
            </Transition>
          </Listbox>
        </div>
        <Menu as="div" className="relative ml-6 lg:hidden">
          <Menu.Button className="-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500">
            <span className="sr-only">Open menu</span>
            <DotsHorizontalIcon className="h-5 w-5" aria-hidden="true" />
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
            <Menu.Items className="absolute top-full right-0 mt-1 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md border border-gray-300 bg-white focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={toToday}
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block w-full px-4 py-2 text-left text-sm'
                      )}
                    >
                      Go to today
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className="py-1">
                {views.map((view) => (
                  <Menu.Item key={view.id}>
                    {({ active }) => (
                      <button
                        onClick={() => setView(view.id)}
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block w-full px-4 py-2 text-left text-sm'
                        )}
                      >
                        {view.label}
                      </button>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </header>
  )
}

export default CalendarHeader
