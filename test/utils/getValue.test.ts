import { getValue } from '../../src/utils'
import { systemTheme as theme } from '../../src/theme'

/*








*/

describe('getValue utility function', () => {
  it('should retieve a string value from an object-based scale with a string key', () => {
    expect(getValue('blue', theme.colors)).toBe('#12A5EC')
  })

  it('should retieve a numeric value from an object-based scale with a string key', () => {
    expect(getValue('light', theme.fontWeights)).toBe(300)
  })

  it('should retieve a string value from an array-based scale with a string key', () => {
    expect(getValue('dashed', theme.borderStyles)).toBe('dashed')
  })

  it('should retieve a string value from an array-based scale with a numeric key', () => {
    expect(getValue(1, theme.borderStyles)).toBe('dashed')
  })

  it('should retieve a numeric value from an array-based scale with a numeric key', () => {
    expect(getValue(2, theme.spaces)).toBe(8)
  })

  it('should return the initial value if no scale is provided', () => {
    expect(getValue('purple')).toBe('purple')
  })

  it('should return an empty string if a scale is provided without a value', () => {
    expect(getValue(undefined, theme.colors)).toBe('')
  })

  it('should return an empty string if neither a scale or a value is provided', () => {
    expect(getValue(undefined, undefined)).toBe('')
  })
})
