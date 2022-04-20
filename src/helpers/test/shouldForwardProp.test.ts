// Types
import type { ThemeProps } from '../../types/theme'

// Utils
import { shouldForwardProp } from '../shouldForwardProp'
import { defaultBreakpoints } from '../../utils'

/*








*/

describe('When passing a string value', () => {
  it('should return false if the string is a known css property', () => {
    expect(shouldForwardProp('height')).toBe(false)
    expect(shouldForwardProp('display')).toBe(false)
    expect(shouldForwardProp('gridTemplateColumns')).toBe(false)
  })

  it('should return true if the string is not a known css property', () => {
    expect(shouldForwardProp('cheese')).toBe(true)
    expect(shouldForwardProp('tomato')).toBe(true)
    expect(shouldForwardProp('sandWhich')).toBe(true)
  })
})

describe('When passing a non-string value', () => {
  it('should return true if a number is passed', () => {
    expect(shouldForwardProp(3)).toBe(true)
  })

  it('should return true if true is passed', () => {
    expect(shouldForwardProp(true)).toBe(true)
  })

  it('should return true if false is passed', () => {
    expect(shouldForwardProp(false)).toBe(true)
  })

  it('should return true if an object is passed', () => {
    expect(shouldForwardProp({})).toBe(true)
  })

  it('should return true if an object is passed, even when the objects keys or values ARE css properties', () => {
    expect(shouldForwardProp({ animation: 'animation' })).toBe(true)
  })

  it('should return true if an array is passed', () => {
    expect(shouldForwardProp([])).toBe(true)
  })

  it('should return true if an array is passed, even when the array contents IS a css property', () => {
    expect(shouldForwardProp(['display'])).toBe(true)
  })

  it('should return true if null is passed', () => {
    expect(shouldForwardProp(null)).toBe(true)
  })

  it('should return true if undefined is passed', () => {
    expect(shouldForwardProp(undefined)).toBe(true)
  })
})
