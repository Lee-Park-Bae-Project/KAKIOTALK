import {
  convertDBTimeTohhmmA,
  convertMillToMMDDYYYY,
  getCurTimeDBFormatForTest,
} from './utils'

describe('moment', () => {
  describe('getTimeDBFormat', () => {
    it.each([
      ['2020-05-18T16:03:31.364Z', '2020-05-19 01:03:31'],
      ['2020-05-18T16:06:36.438Z', '2020-05-19 01:06:36'],
      ['2020-05-18T16:07:40.089Z', '2020-05-19 01:07:40'],

    ])('getCurTimeDBFormat(%p) = %p', (date, expected) => {
      expect(getCurTimeDBFormatForTest(new Date(date))).toEqual(expected)
    })
  })
})
