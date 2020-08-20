import {
  convertDBTimeTohhmmA,
  convertMillToMMDDYYYY,
} from './utils'

describe('moment', () => {
  describe('getTimeDBFormat', () => {
    it.each([
      [1597950293016, '08-21-2020'],
      [1577923200000, '01-02-2020'],
    ])('getCurTimeDBFormat(%p) = %p', (date, expected) => {
      expect(convertMillToMMDDYYYY(date)).toEqual(expected)
    })
  })
})
