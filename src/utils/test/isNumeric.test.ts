import { isNumeric } from '../isNumeric'
/*








*/

describe('When the value passed is numeric', () => {
  it('should return true', () => {
    expect(isNumeric(2)).toBe(true)
  })
})

describe('When the value passed is a numeric string', () => {
  it('should return true', () => {
    expect(isNumeric('2')).toBe(true)
  })
})

describe('When the value passed is a non-numeric string', () => {
  it('should return false', () => {
    expect(isNumeric('not a number')).toBe(false)
  })
})

describe('When the value passed is not a number or a string', () => {
  it('should return false when passed null', () => {
    expect(isNumeric(null)).toBe(false)
  })

  it('should return false when passed undefined', () => {
    expect(isNumeric(undefined)).toBe(false)
  })

  it('should return false when passed a boolean', () => {
    expect(isNumeric(true)).toBe(false)
    expect(isNumeric(false)).toBe(false)
  })
})
