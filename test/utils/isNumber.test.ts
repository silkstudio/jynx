import { isNumber } from '../../src/utils'

/*








*/

describe('isNumber utility function', () => {
  test('should return true if the value passed to testit is a number', () => {
    expect(isNumber(2)).toBe(true)
  })

  it('should return true if the value passed to it is a string of a number', () => {
    expect(isNumber('2')).toBe(true)
  })

  it('should return false if the value passed to it is not a number', () => {
    expect(isNumber('not a number')).toBe(false)
  })

  it('should return false if the value passed to it is undefined', () => {
    expect(isNumber(undefined)).toBe(false)
  })
})
