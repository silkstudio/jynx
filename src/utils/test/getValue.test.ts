import { getValue } from '../getValue'
import { systemTheme as theme } from '../../theme'

/*








*/

describe('When a string key is passed', () => {
  it('should be able to retieve a string value from an object-based scale', () => {
    expect(getValue('blue', theme.colors)).toBe('#12A5EC')
  })

  it('should be able to retieve a numeric value from an object-based scale', () => {
    expect(getValue('light', theme.fontWeights)).toBe(300)
  })

  it('should be able to retieve a string value from an array-based scale', () => {
    expect(getValue('dashed', theme.borderStyles)).toBe('dashed')
  })
})

describe('When a numeric key is passed', () => {
  it('should be able to retieve a string value from an array-based scale', () => {
    expect(getValue(1, theme.borderStyles)).toBe('dashed')
  })

  it('should be able to retieve a numeric value from an array-based scale', () => {
    expect(getValue(2, theme.spaces)).toBe(8)
  })

  it('should be able to retieve a zero-indexed value from an array-based scale', () => {
    expect(getValue(0, theme.spaces)).toBe(0)
  })
})

describe('When a numeric string key is passed', () => {
  it('should be able to retieve a string value from an array-based scale', () => {
    expect(getValue('1', theme.borderStyles)).toBe('dashed')
  })

  it('should be able to retieve a numeric value from an array-based scale', () => {
    expect(getValue('2', theme.spaces)).toBe(8)
  })
})

describe('When a value is passed but no scale is defined', () => {
  it('should return the initially passed value', () => {
    expect(getValue('purple')).toBe('purple')
  })
})

describe('When a scale is defined but no value is passed', () => {
  it('should return an empty string', () => {
    expect(getValue(undefined, theme.colors)).toBe('')
  })
})

describe('When no value is passed and no scale is defined', () => {
  it('should return an empty string', () => {
    expect(getValue(undefined, undefined)).toBe('')
  })
})
