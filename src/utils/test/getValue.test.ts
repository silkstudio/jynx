import { getValue } from '../getValue'
import { mockTheme } from '../../theme'

/*








*/

describe('When a string key is passed', () => {
  it('should be able to retieve a string value from an object-based scale', () => {
    expect(getValue('blue', mockTheme.colors)).toBe('#12A5EC')
  })

  it('should be able to retieve a numeric value from an object-based scale', () => {
    expect(getValue('light', mockTheme.fontWeights)).toBe(300)
  })

  it('should be able to retieve a string value from an array-based scale', () => {
    expect(getValue('dashed', mockTheme.borderStyles)).toBe('dashed')
  })
})

describe('When a numeric key is passed', () => {
  it('should be able to retieve a string value from an array-based scale', () => {
    expect(getValue(1, mockTheme.borderStyles)).toBe('dashed')
  })

  it('should be able to retieve a numeric value from an array-based scale', () => {
    expect(getValue(2, mockTheme.space)).toBe(8)
  })

  it('should be able to retieve a zero-indexed value from an array-based scale', () => {
    expect(getValue(0, mockTheme.space)).toBe(0)
  })
})

describe('When a numeric string key is passed', () => {
  it('should be able to retieve a string value from an array-based scale', () => {
    expect(getValue('1', mockTheme.borderStyles)).toBe('dashed')
  })

  it('should be able to retieve a numeric value from an array-based scale', () => {
    expect(getValue('2', mockTheme.space)).toBe(8)
  })
})

describe('When a value is passed but no scale is defined', () => {
  it('should return the initially passed value', () => {
    expect(getValue('purple')).toBe('purple')
  })
})

describe('When a scale is defined but no value is passed', () => {
  it('should return an empty string', () => {
    expect(getValue(undefined, mockTheme.colors)).toBe('')
  })
})

describe('When no value is passed and no scale is defined', () => {
  it('should return an empty string', () => {
    expect(getValue(undefined, undefined)).toBe('')
  })
})
