import { useEffect, useState } from 'react'
import { navigate, useLocation } from '@redwoodjs/router'
import CalendarHeader from 'src/components/Elements/Calendar/CalendarHeader'
import DayView from 'src/components/Elements/Calendar/DayView'
import WeekView from 'src/components/Elements/Calendar/WeekView'
import MonthView from 'src/components/Elements/Calendar/MonthView'
import {
  currentYear,
  currentMonth,
  currentDay,
  dateString,
} from 'src/utils/dates'

type Event = {
  date: string
  to: string
  title: string
  startTime: number
  endTime?: number
}

type CalendarProps = {
  events?: Event[]
  defaultView?: string
}

type DateObject = {
  year: number
  month: number
  day: number
  string: string
}

export type CalendarChildrenProps = {
  events?: Event[]
  today: DateObject
  date: DateObject
  setCalendarDate: ({
    year,
    month,
    day,
  }: {
    year?: number
    month?: number
    day?: number
  }) => void
}

const Calendar = ({ events, defaultView }: CalendarProps) => {
  const { pathname, search } = useLocation()
  const searchParams = new URLSearchParams(search)

  const today: DateObject = {
    year: currentYear(),
    month: currentMonth(),
    day: currentDay(),
    string: dateString(currentYear(), currentMonth(), currentDay()),
  }

  const [date, setDate] = useState<DateObject>(today)
  const [view, setView] = useState(defaultView || 'week')

  useEffect(() => {
    if (searchParams.has('date')) {
      const dateArray = searchParams.get('date').split('-')
      const year = parseInt(dateArray[0])
      const month = parseInt(dateArray[1])
      const day = parseInt(dateArray[2])

      setDate({
        year,
        month,
        day,
        string: dateString(year, month, day),
      })
    } else {
      searchParams.set('date', date.string)
    }

    if (searchParams.has('view')) {
      setView(searchParams.get('view'))
    } else {
      searchParams.set('view', view)
    }

    navigate(`${pathname}${searchParams.toString()}`)
  }, [])

  useEffect(() => {
    searchParams.set('date', date.string)
    navigate(`${pathname}?${searchParams.toString()}`)
  }, [date])

  useEffect(() => {
    searchParams.set('view', view)
    navigate(`${pathname}?${searchParams.toString()}`)
  }, [view])

  const setCalendarDate = ({
    year,
    month,
    day,
  }: {
    year?: number
    month?: number
    day?: number
  }) => {
    const newYear = year || date.year
    const newMonth = month || date.month
    const newDay = day || date.day

    setDate({
      year: newYear,
      month: newMonth,
      day: newDay,
      string: dateString(newYear, newMonth, newDay),
    })
  }

  const calendarProps: CalendarChildrenProps = {
    events,
    today,
    date,
    setCalendarDate,
  }

  return (
    <div
      className={
        view === 'month'
          ? 'lg:flex lg:h-full lg:flex-col'
          : 'flex h-full flex-col'
      }
    >
      <CalendarHeader view={view} setView={setView} {...calendarProps} />
      {view === 'day' && <DayView {...calendarProps} />}
      {view === 'week' && <WeekView {...calendarProps} />}
      {view === 'month' && <MonthView {...calendarProps} />}
    </div>
  )
}

export default Calendar
