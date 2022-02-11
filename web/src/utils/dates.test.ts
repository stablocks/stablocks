import {
  currentYear,
  currentMonth,
  currentDay,
  dateString,
  dayNames,
  dayOfWeek,
  daysInMonth,
  daysThisMonth,
  // daysThisWeek,
  firstLetter,
  leapYear,
  monthNames,
  next,
  previous,
  stringAbbr,
  times,
  zeroPrepend,
} from './dates'

describe('Dates', () => {
  describe('Today', () => {
    it("should render today's year", () => {
      expect(currentYear()).toEqual(new Date().getFullYear())
    })

    it("should render today's month", () => {
      expect(currentMonth()).toEqual(new Date().getMonth())
    })

    it("should render today's day", () => {
      expect(currentDay()).toEqual(new Date().getDate())
    })
  })

  describe('Month', () => {
    it('should return month name', () => {
      expect(monthNames[1]).toEqual('February')
    })

    it('should return month abbreviation', () => {
      expect(stringAbbr(monthNames[0])).toEqual('Jan')
    })

    it('should return month first letter', () => {
      expect(firstLetter(monthNames[11])).toEqual('D')
    })

    it('should return days in month of June', () => {
      expect(daysInMonth(2022, 6)).toEqual(30)
    })

    it('should return days of February in leap year', () => {
      expect(daysInMonth(2024, 2)).toEqual(29)
    })
  })

  describe('Weekday', () => {
    it('should return day name', () => {
      expect(dayNames[1]).toEqual('Monday')
    })

    it('should return day abbreviation', () => {
      expect(stringAbbr(dayNames[0])).toEqual('Sun')
    })

    it('should return day first letter', () => {
      expect(firstLetter(dayNames[5])).toEqual('F')
    })
  })

  describe('Times', () => {
    it('should return midnight', () => {
      expect(times[0]).toEqual('12AM')
    })

    it('should return noon', () => {
      expect(times[12]).toEqual('12PM')
    })
  })

  describe('Leap years', () => {
    it('should return true on leap year', () => {
      expect(leapYear(2024)).toBeTruthy()
    })

    it('should return false on non-leap year', () => {
      expect(leapYear(2022)).toBeFalsy()
    })
  })

  describe('Utilities', () => {
    it('should prepend zero to single digit', () => {
      expect(zeroPrepend(1)).toEqual('01')
    })

    it('should not prepend zero to double digit', () => {
      expect(zeroPrepend(11)).toEqual('11')
    })

    it('should create a full timestamp string', () => {
      expect(dateString(2022, 2, 10)).toEqual('2022-02-10')
    })

    it('should create a month timestamp string', () => {
      expect(dateString(2022, 2)).toEqual('2022-02')
    })

    it('should return the day of the week', () => {
      expect(dayOfWeek(2022, 2, 6)).toEqual(0)
      expect(dayOfWeek(2022, 2, 10)).toEqual(4)
    })
  })

  describe('Previous', () => {
    describe('Week', () => {
      const view = 'week'

      it('should get previous week day', () => {
        expect(
          previous(
            {
              year: 2022,
              month: 2,
              day: 15,
              string: '2022-02-15',
            },
            view
          )
        ).toEqual({ day: 8 })
      })

      it('should get week day from previous month', () => {
        expect(
          previous(
            {
              year: 2022,
              month: 2,
              day: 5,
              string: '2022-02-05',
            },
            view
          )
        ).toEqual({ year: 2022, month: 1, day: 29 })
      })

      it('should get week day from previous year', () => {
        expect(
          previous(
            {
              year: 2022,
              month: 1,
              day: 5,
              string: '2022-01-05',
            },
            view
          )
        ).toEqual({ year: 2021, month: 12, day: 29 })
      })
    })

    describe('Month', () => {
      const view = 'month'

      it('should get previous month', () => {
        expect(
          previous(
            {
              year: 2022,
              month: 2,
              day: 5,
              string: '2022-02-05',
            },
            view
          )
        ).toEqual({ year: 2022, month: 1, day: 1 })
      })

      it('should get month from previous year', () => {
        expect(
          previous(
            {
              year: 2022,
              month: 1,
              day: 5,
              string: '2022-01-05',
            },
            view
          )
        ).toEqual({ year: 2021, month: 12, day: 1 })
      })
    })

    describe('Day', () => {
      const view = 'day'
      it('should get previous day', () => {
        expect(
          previous(
            {
              year: 2022,
              month: 2,
              day: 5,
              string: '2022-02-05',
            },
            view
          )
        ).toEqual({ day: 4 })
      })

      it('should get day from previous month', () => {
        expect(
          previous(
            {
              year: 2022,
              month: 2,
              day: 1,
              string: '2022-02-01',
            },
            view
          )
        ).toEqual({ year: 2022, month: 1, day: 31 })
      })

      it('should get day from previous year', () => {
        expect(
          previous(
            {
              year: 2022,
              month: 1,
              day: 1,
              string: '2022-01-01',
            },
            view
          )
        ).toEqual({ year: 2021, month: 12, day: 31 })
      })
    })
  })

  describe('Next', () => {
    describe('Week', () => {
      const view = 'week'

      it('should get next week day', () => {
        expect(
          next(
            {
              year: 2022,
              month: 2,
              day: 15,
              string: '2022-02-15',
            },
            view
          )
        ).toEqual({ day: 22 })
      })

      it('should get week day from next month', () => {
        expect(
          next(
            {
              year: 2022,
              month: 2,
              day: 24,
              string: '2022-02-24',
            },
            view
          )
        ).toEqual({ year: 2022, month: 3, day: 3 })
      })

      it('should get week day from next year', () => {
        expect(
          next(
            {
              year: 2022,
              month: 12,
              day: 29,
              string: '2022-12-29',
            },
            view
          )
        ).toEqual({ year: 2023, month: 1, day: 5 })
      })
    })

    describe('Month', () => {
      const view = 'month'

      it('should get next month', () => {
        expect(
          next(
            {
              year: 2022,
              month: 2,
              day: 5,
              string: '2022-02-05',
            },
            view
          )
        ).toEqual({ month: 3, day: 1 })
      })

      it('should get month from next year', () => {
        expect(
          next(
            {
              year: 2022,
              month: 12,
              day: 5,
              string: '2022-12-05',
            },
            view
          )
        ).toEqual({ year: 2023, month: 1, day: 1 })
      })
    })

    describe('Day', () => {
      const view = 'day'
      it('should get next day', () => {
        expect(
          next(
            {
              year: 2022,
              month: 2,
              day: 5,
              string: '2022-02-05',
            },
            view
          )
        ).toEqual({ day: 6 })
      })

      it('should get day from next month', () => {
        expect(
          next(
            {
              year: 2022,
              month: 2,
              day: 28,
              string: '2022-02-28',
            },
            view
          )
        ).toEqual({ year: 2022, month: 3, day: 1 })
      })

      it('should get day from next year', () => {
        expect(
          next(
            {
              year: 2022,
              month: 12,
              day: 31,
              string: '2022-12-31',
            },
            view
          )
        ).toEqual({ year: 2023, month: 1, day: 1 })
      })
    })
  })

  describe('Month days', () => {
    it('should get correct number of days for month', () => {
      expect(daysThisMonth(2022, 1).length).toEqual(42)
      expect(daysThisMonth(2022, 2).length).toEqual(35)
      expect(daysThisMonth(2022, 3).length).toEqual(35)
      expect(daysThisMonth(2022, 4).length).toEqual(35)
      expect(daysThisMonth(2022, 5).length).toEqual(35)
      expect(daysThisMonth(2022, 6).length).toEqual(35)
      expect(daysThisMonth(2022, 7).length).toEqual(42)
      expect(daysThisMonth(2022, 8).length).toEqual(35)
      expect(daysThisMonth(2022, 9).length).toEqual(35)
      expect(daysThisMonth(2022, 10).length).toEqual(42)
      expect(daysThisMonth(2022, 11).length).toEqual(42)
      expect(daysThisMonth(2022, 12).length).toEqual(35)
      expect(daysThisMonth(2024, 2).length).toEqual(35)
    })
  })
})
