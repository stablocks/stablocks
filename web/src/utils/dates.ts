/**
 *
 * @returns current year
 */
export const currentYear = () => {
  return new Date().getFullYear()
}

/**
 *
 * @returns current month
 */
export const currentMonth = () => {
  return new Date().getMonth() + 1
}

/**
 *
 * @returns current day
 */
export const currentDay = () => {
  return new Date().getDate()
}

/**
 *
 * @returns today's date as UTC string
 */
export const todayString = () => {
  return dateString(currentYear(), currentMonth(), currentDay())
}

/**
 * Converts military time number to hour and minutes object
 * @param time
 * @returns object with hour and minutes
 */
export const hoursAndMinutes = (time: number) => {
  const timeArray = time.toString().split('')
  const minutes = parseInt(timeArray.slice(-2, 0).join(''))
  const hour = parseInt(timeArray.slice(0, timeArray.length - 2).join(''))

  if (minutes > 59 || hour > 23) throw Error('Invalid time provided')

  return {
    hour,
    minutes,
  }
}

/**
 * Appends time to UTC date string
 * @param date UTC date string
 * @param time 24hr time as number
 * @returns UTC datetime string
 */
export const appendUTCTime = (date: string, time: number) => {
  const { hour, minutes } = hoursAndMinutes(time)

  return `${date}T${zeroPrepend(hour)}:${zeroPrepend(minutes)}`
}

/**
 * Creates time string
 * @param time 24hr time as number
 * @returns
 */
export const twelveHourTime = (time: number) => {
  const { hour, minutes } = hoursAndMinutes(time)
  const theHour = hour > 12 ? hour - 12 : hour
  const amPm = hour > 12 ? 'PM' : 'AM'

  return `${theHour}:${zeroPrepend(minutes)} ${amPm}`
}

/**
 * Array of weekday names
 */
export const dayNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

/**
 * Array of month names
 */
export const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

/**
 * Array of 12hr times
 */
export const times = [
  '12AM',
  '1AM',
  '2AM',
  '3AM',
  '4AM',
  '5AM',
  '6AM',
  '7AM',
  '8AM',
  '9AM',
  '10AM',
  '11AM',
  '12PM',
  '1PM',
  '2PM',
  '3PM',
  '4PM',
  '5PM',
  '6PM',
  '7PM',
  '8PM',
  '9PM',
  '10PM',
  '11PM',
]

/**
 * First character of a string
 * @param string string to get first character from
 * @returns single character string
 */
export const firstLetter = (string: string) => {
  return string.charAt(0)
}

/**
 * Abbreviations for date names
 * @param string Month or weekday name
 * @returns first three letters as abbreviation
 */
export const stringAbbr = (string: string) => {
  return `${string.charAt(0)}${string.charAt(1)}${string.charAt(2)}`
}

/**
 * Checks if given year is a leap year
 * @param year year to check
 * @returns true if leap year, otherwise false
 */
export function leapYear(year: number) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0
}

/**
 * Gets number of days for a given month
 * @param year Year (ex. 2022)
 * @param month Month (ex. January = 1)
 * @returns Number of days in the month
 */
export const daysInMonth = (year: number, month: number) => {
  const days = [
    31,
    leapYear(year) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ]

  return days[month - 1]
}

/**
 * Prepends single numbers with a zero
 * @param number number to prepend
 * @returns number as string
 */
export const zeroPrepend = (number: number) => {
  const stringNum = number?.toString()

  if (stringNum?.length === 1) {
    return `0${stringNum}`
  }

  return stringNum
}

/**
 * Creates a UTC timestamp
 * @param year
 * @param month
 * @param day optional
 * @returns UTC timestamp string
 */
export const dateString = (year: number, month: number, day?: number) => {
  if (day) return `${year}-${zeroPrepend(month)}-${zeroPrepend(day)}`

  return `${year}-${zeroPrepend(month)}`
}

// Gets numbered day of the week (ex. Sunday: 0, Monday: 1, ...)
/**
 * Gets weekday integer
 * @param year
 * @param month
 * @param day
 * @returns UTC weekday integer
 */
export const dayOfWeek = (year: number, month: number, day: number) => {
  const date = dateString(year, month, day)
  return new Date(date).getUTCDay()
}

/**
 * Array of days for the week of the given day
 * @param year
 * @param month
 * @param day
 * @returns Formatted array of 7 days
 */
export const daysThisWeek = (year: number, month: number, day: number) => {
  const monthDays = daysInMonth(year, month)
  const weekDay = dayOfWeek(year, month, day)

  const prevYear = month === 1 ? year - 1 : year
  const prevMonth = month === 1 ? 12 : month - 1
  const prevMonthLength = daysInMonth(prevYear, prevMonth)

  const nextYear = month === 12 ? year + 1 : year
  const nextMonth = month === 12 ? 1 : month + 1

  const prevDaysCount = weekDay
  const nextDaysCount = 6 - weekDay

  const days = []

  for (let i = prevDaysCount; i > 0; i--) {
    const theYear = day - i < 1 ? prevYear : year
    const theMonth = day - i < 1 ? prevMonth : month
    const theDay = day - i < 1 ? prevMonthLength + (day - i) : day - i
    const date = dateString(theYear, theMonth, theDay)
    const today = todayString()

    days.push({
      date,
      isToday: date === today,
      isCurrentMonth: theMonth === month,
    })
  }

  for (let i = 0; i < nextDaysCount + 1; i++) {
    const theYear = day + i > monthDays ? nextYear : year
    const theMonth = day + i > monthDays ? nextMonth : month
    const theDay = day + i > monthDays ? day + i - monthDays : day + i
    const date = dateString(theYear, theMonth, theDay)
    const today = todayString()

    days.push({
      date,
      isToday: date === today,
      isCurrentMonth: theMonth === month,
    })
  }

  return days
}

/**
 * Array of days of the month given, plus prepended and append days to even out the calendar
 * @param year
 * @param month
 * @returns Formatted array of days for month
 */
export const daysThisMonth = (year: number, month: number) => {
  const monthDays = daysInMonth(year, month)
  const firstWeekDay = dayOfWeek(year, month, 1)

  const prevYear = month === 1 ? year - 1 : year
  const prevMonth = month === 1 ? 12 : month - 1
  const prevMonthLength = daysInMonth(prevYear, prevMonth)

  const nextYear = month === 12 ? year + 1 : year
  const nextMonth = month === 12 ? 1 : month + 1

  const days = []

  // Add days from previous month to fill first week
  if (firstWeekDay !== 0) {
    const previousMonthDays = Array.from(
      { length: prevMonthLength },
      (_, i) => i + 1
    )

    previousMonthDays.slice(-firstWeekDay).map((e) => {
      const string = dateString(prevYear, prevMonth, e)
      const today = dateString(currentYear(), currentMonth(), currentDay())

      days.push({
        date: string,
        isToday: string === today,
        isCurrentMonth: false,
      })
    })
  }

  // Add each day of the month
  Array.from({ length: monthDays }, (_, i) => i + 1).map((e, i) => {
    const string = dateString(year, month, i + 1)
    const today = dateString(currentYear(), currentMonth(), currentDay())

    days.push({
      date: string,
      isCurrentMonth: true,
      isToday: string === today,
    })
  })

  // Fill in remaining days to be divisible by 7
  if (days.length % 7 !== 0) {
    Array.from({ length: 7 - (days.length % 7) }, (_, i) => i + 1).map(
      (e, i) => {
        const string = dateString(nextYear, nextMonth, i + 1)
        const today = dateString(currentYear(), currentMonth(), currentDay())

        days.push({
          date: string,
          isToday: string === today,
          isCurrentMonth: false,
        })
      }
    )
  }

  return days
}

/**
 * Previous day, week or month
 * @param date calendar date object
 * @param view day, week, or month
 * @returns Calendar date object of previous date
 */
export const previous = (
  date: {
    year: number
    month: number
    day: number
    string: string
  },
  view: string
) => {
  const year = date.month === 1 ? date.year - 1 : date.year
  const month = date.month === 1 ? 12 : date.month - 1
  const monthDays = daysInMonth(year, month)

  if (view === 'week') {
    if (date.day > 7) {
      return { day: date.day - 7 }
    } else {
      return {
        year,
        month,
        day: monthDays - (7 - date.day),
      }
    }
  } else if (view === 'month') {
    return {
      year,
      month,
      day: 1,
    }
  } else if (view === 'day') {
    if (date.day === 1) {
      return {
        year,
        month,
        day: monthDays,
      }
    } else {
      return {
        day: date.day - 1,
      }
    }
  }
}

/**
 * Next day, week or month
 * @param date calendar date object
 * @param view day, week, or month
 * @returns Calendar date object of next date
 */
export const next = (
  date: {
    year: number
    month: number
    day: number
    string: string
  },
  view: string
) => {
  const monthDays = daysInMonth(date.year, date.month)
  const year = date.month === 12 ? date.year + 1 : date.year
  const month = date.month === 12 ? 1 : date.month + 1

  if (view === 'week') {
    if (date.day + 7 < monthDays) {
      return { day: date.day + 7 }
    } else {
      return {
        year,
        month,
        day: 7 - (monthDays - date.day),
      }
    }
  } else if (view === 'month') {
    if (date.month === 12) {
      return {
        year: date.year + 1,
        month: 1,
        day: 1,
      }
    } else {
      return {
        month: date.month + 1,
        day: 1,
      }
    }
  } else if (view === 'day') {
    if (date.day === monthDays) {
      return {
        year,
        month,
        day: 1,
      }
    } else {
      return {
        day: date.day + 1,
      }
    }
  }
}

export const gridRow = (start: number, end?: number) => {
  const { hour: startHour, minutes: startMinutes } = hoursAndMinutes(start)

  if (end) {
    const { hour: endHour, minutes: endMinutes } = hoursAndMinutes(end)
  }
}
