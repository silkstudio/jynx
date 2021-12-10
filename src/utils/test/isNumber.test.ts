import { isNumber } from '../index'
/*








*/

describe('When the value passed is numeric', () => {
  it('should return true', () => {
    expect(isNumber(2)).toBe(true)
  })
})

describe('When the value passed is a numeric string', () => {
  it('should return true', () => {
    expect(isNumber('2')).toBe(true)
  })
})

describe('When the value passed is a non-numeric string', () => {
  it('should return false', () => {
    expect(isNumber('not a number')).toBe(false)
  })
})

describe('When the value passed is not a number or a string', () => {
  it('should return false when passed null', () => {
    expect(isNumber(null)).toBe(false)
  })

  it('should return false when passed undefined', () => {
    expect(isNumber(undefined)).toBe(false)
  })

  it('should return false when passed a boolean', () => {
    expect(isNumber(true)).toBe(false)
    expect(isNumber(false)).toBe(false)
  })
})
