import { describe, expect, test } from 'vitest'
import { getDateFormat } from './getDateFormat'

describe('getDateFormat', () => {
  describe('when recive a date', () => {
    test('should return a date format', () => {
      const date = '2022-04-18T20:46:45.000Z' // same format as the firebase date
      const expectedDate = '18/4/2022'

      const dateReturned = getDateFormat(date)

      expect(dateReturned).toEqual(expectedDate)
    })

    test("should return error message when the date isn't valid", () => {
      const date = '12 de abril de 2020'
      const expectedDate = 'Invalid time value'

      const dateReturned = getDateFormat(date)

      expect(dateReturned).toEqual(expectedDate)
    })
  })
})
