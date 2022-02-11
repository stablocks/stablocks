import { Fragment, useEffect, useRef, useState } from 'react'
import {
  dateString,
  dayNames,
  daysThisMonth,
  daysThisWeek,
  firstLetter,
  monthNames,
  next,
  previous,
  times,
} from 'src/utils/dates'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

import type { CalendarChildrenProps } from 'src/components/Elements/Calendar/Calendar'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const DayView = (props: CalendarChildrenProps) => {
  const { date, setCalendarDate } = props
  const [days, setDays] = useState<any[]>([])
  const [monthDays, setMonthDays] = useState<any[]>([])

  useEffect(() => {
    setDays(daysThisWeek(date.year, date.month, date.day))
    setMonthDays(daysThisMonth(date.year, date.month))
  }, [date])

  const container = useRef(null)
  const containerNav = useRef(null)
  const containerOffset = useRef(null)

  useEffect(() => {
    // Set the container scroll position based on the current time.
    const currentMinute = new Date().getHours() * 60
    container.current.scrollTop =
      ((container.current.scrollHeight -
        containerNav.current.offsetHeight -
        containerOffset.current.offsetHeight) *
        currentMinute) /
      1440
  }, [])

  console.log(days)

  return (
    <div className="flex flex-auto overflow-hidden rounded-md border border-gray-300 bg-white">
      <div ref={container} className="flex flex-auto flex-col overflow-auto">
        <div
          ref={containerNav}
          className="sticky z-10 grid flex-none grid-cols-7 bg-white text-xs text-gray-500 md:hidden"
        >
          {dayNames.map((day, i) => (
            <button
              key={i}
              onClick={() =>
                setCalendarDate({
                  year: parseInt(days[i]?.date.split('-')[0]),
                  month: parseInt(days[i]?.date.split('-')[1]),
                  day: parseInt(days[i]?.date.split('-')[2]),
                })
              }
              type="button"
              className="flex flex-col items-center pt-3 pb-1.5"
            >
              <span>{`${firstLetter(day)}`}</span>
              {/* Default: "text-gray-900", Selected: "bg-gray-900 text-white", Today (Not Selected): "text-indigo-600", Today (Selected): "bg-indigo-600 text-white" */}
              <span className="mt-3 flex h-8 w-8 items-center justify-center rounded-full text-base font-semibold text-gray-900">
                {`${parseInt(days[i]?.date.split('-')[2])}`}
              </span>
            </button>
          ))}
        </div>
        <div className="flex w-full flex-auto">
          <div className="w-14 flex-none bg-white ring-1 ring-gray-100" />
          <div className="grid flex-auto grid-cols-1 grid-rows-1">
            {/* Horizontal lines */}
            <div
              className="col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100"
              style={{ gridTemplateRows: 'repeat(48, minmax(3.5rem, 1fr))' }}
            >
              <div ref={containerOffset} className="row-end-1 h-7"></div>
              {times.map((time) => (
                <Fragment key={time}>
                  <div>
                    <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                      {time}
                    </div>
                  </div>
                  <div />
                </Fragment>
              ))}
            </div>

            {/* Events */}
            <ol
              className="col-start-1 col-end-2 row-start-1 grid grid-cols-1"
              style={{
                gridTemplateRows: '1.75rem repeat(288, minmax(0, 1fr)) auto',
              }}
            >
              <li
                className="relative mt-px flex"
                style={{ gridRow: '74 / span 12' }}
              >
                <a
                  href="#"
                  className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-blue-50 p-2 text-xs leading-5 hover:bg-blue-100"
                >
                  <p className="order-1 font-semibold text-blue-700">
                    Breakfast
                  </p>
                  <p className="text-blue-500 group-hover:text-blue-700">
                    <time dateTime="2022-01-22T06:00">6:00 AM</time>
                  </p>
                </a>
              </li>
              <li
                className="relative mt-px flex"
                style={{ gridRow: '92 / span 30' }}
              >
                <a
                  href="#"
                  className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-pink-50 p-2 text-xs leading-5 hover:bg-pink-100"
                >
                  <p className="order-1 font-semibold text-pink-700">
                    Flight to Paris
                  </p>
                  <p className="order-1 text-pink-500 group-hover:text-pink-700">
                    John F. Kennedy International Airport
                  </p>
                  <p className="text-pink-500 group-hover:text-pink-700">
                    <time dateTime="2022-01-22T07:30">7:30 AM</time>
                  </p>
                </a>
              </li>
              <li
                className="relative mt-px flex"
                style={{ gridRow: '134 / span 18' }}
              >
                <a
                  href="#"
                  className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-indigo-50 p-2 text-xs leading-5 hover:bg-indigo-100"
                >
                  <p className="order-1 font-semibold text-indigo-700">
                    Sightseeing
                  </p>
                  <p className="order-1 text-indigo-500 group-hover:text-indigo-700">
                    Eiffel Tower
                  </p>
                  <p className="text-indigo-500 group-hover:text-indigo-700">
                    <time dateTime="2022-01-22T11:00">11:00 AM</time>
                  </p>
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="hidden w-1/2 max-w-md flex-shrink border-l border-gray-100 py-10 px-8 md:block">
        <div className="flex items-center text-center text-gray-900">
          <button
            type="button"
            onClick={() => setCalendarDate(previous(date, 'month'))}
            className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Previous month</span>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="flex-auto font-semibold">
            <time dateTime={dateString(date.year, date.month)}>
              {`${monthNames[date.month - 1]} ${date.year}`}
            </time>
          </div>
          <button
            type="button"
            onClick={() => setCalendarDate(next(date, 'month'))}
            className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Next month</span>
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 grid grid-cols-7 text-center text-xs leading-6 text-gray-500">
          {dayNames.map((day) => (
            <div key={day}>{`${firstLetter(day)}`}</div>
          ))}
        </div>
        <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
          {monthDays.map((day, dayIdx) => (
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
                'py-1.5 hover:bg-gray-100 focus:z-10',
                day.isCurrentMonth ? 'bg-white' : 'bg-gray-50',
                (day.isSelected || day.isToday) && 'font-semibold',
                day.isSelected && 'text-white',
                !day.isSelected &&
                  day.isCurrentMonth &&
                  !day.isToday &&
                  'text-gray-900',
                !day.isSelected &&
                  !day.isCurrentMonth &&
                  !day.isToday &&
                  'text-gray-400',
                day.isToday && !day.isSelected && 'text-indigo-600',
                dayIdx === 0 && 'rounded-tl-lg',
                dayIdx === 6 && 'rounded-tr-lg',
                dayIdx === monthDays.length - 7 && 'rounded-bl-lg',
                dayIdx === monthDays.length - 1 && 'rounded-br-lg'
              )}
            >
              <time
                dateTime={day.date}
                className={classNames(
                  'mx-auto flex h-7 w-7 items-center justify-center rounded-full',
                  day.isSelected && day.isToday && 'bg-indigo-600',
                  day.isSelected && !day.isToday && 'bg-gray-900'
                )}
              >
                {day.date.split('-').pop().replace(/^0/, '')}
              </time>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DayView
