import { useEffect, useState } from 'react'
import { daysThisMonth, dayNames } from 'src/utils/dates'
import { ClockIcon } from '@heroicons/react/solid'

import type { CalendarChildrenProps } from 'src/components/Elements/Calendar/Calendar'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const MonthView = (props: CalendarChildrenProps) => {
  const { date, setCalendarDate } = props
  const [days, setDays] = useState<any[]>([])

  useEffect(() => {
    setDays(daysThisMonth(date.year, date.month))
  }, [date])

  const selectedDay = days.find((day) => day.isSelected)

  const calendarRows = days.length / 7

  return (
    <>
      <div className="overflow-hidden rounded-md border border-gray-300 lg:flex lg:flex-auto lg:flex-col">
        <div className="grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold leading-6 text-gray-700 lg:flex-none">
          {dayNames.map((name) => (
            <div key={name} className="bg-white py-2">
              {name.charAt(0)}
              <span className="sr-only sm:not-sr-only">
                {name.substring(1)}
              </span>
            </div>
          ))}
        </div>
        <div className="flex bg-gray-200 text-xs leading-6 text-gray-700 lg:flex-auto">
          <div
            className={classNames(
              calendarRows === 5 ? 'lg:grid-rows-5' : '',
              calendarRows === 6 ? 'lg:grid-rows-6' : '',
              calendarRows === 7 ? 'lg:grid-rows-7' : '',
              'hidden w-full lg:grid lg:grid-cols-7 lg:gap-px'
            )}
          >
            {days?.map((day) => (
              <div
                key={day.date}
                className={classNames(
                  day.isCurrentMonth ? 'bg-white' : 'bg-gray-50 text-gray-500',
                  'relative min-h-[8vw] py-2 px-3'
                )}
              >
                <time
                  dateTime={day.date}
                  className={
                    day.isToday
                      ? 'flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white'
                      : undefined
                  }
                >
                  {day.date.split('-').pop().replace(/^0/, '')}
                </time>
                {day?.events?.length > 0 && (
                  <ol className="mt-2">
                    {day.events.slice(0, 2).map((event) => (
                      <li key={event.id}>
                        <a href={event.href} className="group flex">
                          <p className="flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600">
                            {event.name}
                          </p>
                          <time
                            dateTime={event.datetime}
                            className="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block"
                          >
                            {event.time}
                          </time>
                        </a>
                      </li>
                    ))}
                    {day?.events?.length > 2 && (
                      <li className="text-gray-500">
                        + {day?.events?.length - 2} more
                      </li>
                    )}
                  </ol>
                )}
              </div>
            ))}
          </div>
          <div
            className={classNames(
              calendarRows === 5 ? 'grid-rows-5' : '',
              calendarRows === 6 ? 'grid-rows-6' : '',
              calendarRows === 7 ? 'grid-rows-7' : '',
              `isolate grid w-full grid-cols-7 gap-px lg:hidden`
            )}
          >
            {days?.map((day) => (
              <button
                key={day.date}
                onClick={() => {
                  const dateArray = day.date.split('-')
                  setCalendarDate({
                    year: parseInt(dateArray[0]),
                    month: parseInt(dateArray[1]),
                    day: parseInt(dateArray[2]),
                  })
                }}
                type="button"
                className={classNames(
                  day.isCurrentMonth ? 'bg-white' : 'bg-gray-50',
                  (day.isSelected || day.isToday) && 'font-semibold',
                  day.isSelected && 'text-white',
                  !day.isSelected && day.isToday && 'text-indigo-600',
                  !day.isSelected &&
                    day.isCurrentMonth &&
                    !day.isToday &&
                    'text-gray-900',
                  !day.isSelected &&
                    !day.isCurrentMonth &&
                    !day.isToday &&
                    'text-gray-500',
                  'flex h-14 flex-col py-2 px-3 hover:bg-gray-100 focus:z-10'
                )}
              >
                <time
                  dateTime={day.date}
                  className={classNames(
                    day.isSelected &&
                      'flex h-6 w-6 items-center justify-center rounded-full',
                    day.isSelected && day.isToday && 'bg-indigo-600',
                    day.isSelected && !day.isToday && 'bg-gray-900',
                    'ml-auto'
                  )}
                >
                  {day.date.split('-').pop().replace(/^0/, '')}
                </time>
                <p className="sr-only">{day?.events?.length} events</p>
                {day?.events?.length > 0 && (
                  <div className="-mx-0.5 mt-auto flex flex-wrap-reverse">
                    {day.events.map((event) => (
                      <div
                        key={event.id}
                        className="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"
                      />
                    ))}
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
      {selectedDay?.events?.length > 0 && (
        <div className="py-10 px-4 sm:px-6 lg:hidden">
          <ol className="divide-y divide-gray-100 overflow-hidden rounded-lg bg-white text-sm shadow ring-1 ring-black ring-opacity-5">
            {selectedDay.events.map((event) => (
              <li
                key={event.id}
                className="group flex p-4 pr-6 focus-within:bg-gray-50 hover:bg-gray-50"
              >
                <div className="flex-auto">
                  <p className="font-semibold text-gray-900">{event.name}</p>
                  <time
                    dateTime={event.datetime}
                    className="mt-2 flex items-center text-gray-700"
                  >
                    <ClockIcon
                      className="mr-2 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    {event.time}
                  </time>
                </div>
                <a
                  href={event.href}
                  className="ml-6 flex-none self-center rounded-md border border-gray-300 bg-white py-2 px-3 font-semibold text-gray-700 opacity-0 shadow-sm hover:bg-gray-50 focus:opacity-100 group-hover:opacity-100"
                >
                  Edit<span className="sr-only">, {event.name}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      )}
    </>
  )
}

export default MonthView
