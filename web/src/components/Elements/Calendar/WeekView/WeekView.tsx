import { Fragment, useEffect, useRef, useState } from 'react'
import { Link } from '@redwoodjs/router'
import {
  appendUTCTime,
  dayNames,
  daysThisWeek,
  stringAbbr,
  times,
  twelveHourTime,
} from 'src/utils/dates'

import type { CalendarChildrenProps } from 'src/components/Elements/Calendar/Calendar'

const WeekView = (props: CalendarChildrenProps) => {
  const { events, date, setCalendarDate } = props
  const [days, setDays] = useState<any[]>([])

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

  useEffect(() => {
    setDays(daysThisWeek(date.year, date.month, date.day))
  }, [date])

  return (
    <div
      ref={container}
      className="flex flex-auto flex-col overflow-auto rounded-md border border-gray-300 bg-white"
    >
      <div
        style={{ width: '165%' }}
        className="flex max-w-full flex-none flex-col sm:max-w-none md:max-w-full"
      >
        <div
          ref={containerNav}
          className="sticky top-0 z-10 flex-none bg-white shadow"
        >
          <div className="grid grid-cols-7 text-sm leading-6 text-gray-500 sm:hidden">
            {dayNames.map((name, i) => (
              <button
                key={name}
                onClick={() => {
                  const dateArray = days[i].date.split('-')
                  setCalendarDate({
                    year: parseInt(dateArray[0]),
                    month: parseInt(dateArray[1]),
                    day: parseInt(dateArray[2]),
                  })
                }}
                type="button"
                className="flex flex-col items-center pt-2 pb-3"
              >
                {`${name.charAt(0)} `}
                <span className="mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900">
                  {days[i]?.date?.split('-').pop().replace(/^0/, '')}
                </span>
              </button>
            ))}
          </div>

          <div className="-mr-px hidden grid-cols-7 divide-x divide-gray-100 border-r border-gray-100 text-sm leading-6 text-gray-500 sm:grid">
            <div className="col-end-1 w-14" />
            {dayNames.map((name, i) => (
              <div key={name} className="flex items-center justify-center py-3">
                <span>
                  {`${stringAbbr(name)} `}
                  <span className="items-center justify-center font-semibold text-gray-900">
                    {days[i]?.date?.split('-').pop().replace(/^0/, '')}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-auto">
          <div className="sticky left-0 w-14 flex-none bg-white ring-1 ring-gray-100" />
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

            {/* Vertical lines */}
            <div className="col-start-1 col-end-2 row-start-1 hidden grid-cols-7 grid-rows-1 divide-x divide-gray-100 sm:grid sm:grid-cols-7">
              <div className="col-start-1 row-span-full" />
              <div className="col-start-2 row-span-full" />
              <div className="col-start-3 row-span-full" />
              <div className="col-start-4 row-span-full" />
              <div className="col-start-5 row-span-full" />
              <div className="col-start-6 row-span-full" />
              <div className="col-start-7 row-span-full" />
            </div>

            {/* Events */}
            <ol
              className="col-start-1 col-end-2 row-start-1 grid grid-cols-1 sm:grid-cols-7"
              style={{
                gridTemplateRows: '1.75rem repeat(288, minmax(0, 1fr)) auto',
              }}
            >
              {events?.map((event, i) => (
                <li
                  key={i}
                  className="relative mt-px flex sm:col-start-3"
                  style={{ gridRow: '64 / span 12' }}
                >
                  <Link
                    to={event.to}
                    className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-indigo-50 p-2 text-xs leading-5 hover:bg-indigo-100"
                  >
                    <p className="order-1 font-semibold text-indigo-700">
                      {event.title}
                    </p>
                    <p className="text-indigo-500 group-hover:text-indigo-700">
                      <time
                        dateTime={appendUTCTime(date.string, event.startTime)}
                      >
                        {`${twelveHourTime(event.startTime)}`}
                      </time>
                    </p>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeekView
