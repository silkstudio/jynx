import { themeGet } from '../../src/utils'
import { DefaultTheme } from '../../src/types'
import { systemTheme } from '../../src/theme'

const theme: DefaultTheme = systemTheme

const testTheme = {
  colors: {
    red: '#F2335D',
    orange: '#FE8400',
    yellow: '#FFCC00',
    green: '#7CD420',
    blue: '#12A5EC',
    purple: '#7753F8'
  },
  spaces: [0, 4, 8, 16, 32, 64, 128, 256]
}

/*








  */

describe('themeGet utility function', () => {
  it("should return a theme scale as an object if passed a single level key that's corresponding theme property is defined as an object", () => {
    const foo = themeGet('colors')({ theme })

    expect(typeof foo).toBe('object')
    expect(foo).toMatchObject(testTheme.colors)
  })

  it("should return a theme scale as an array if passed a single level key that's corresponding theme property is defined as an array", () => {
    const foo = themeGet('spaces')({ theme })

    expect(Array.isArray(foo)).toBe(true)
    expect(foo).toEqual(testTheme.spaces)
  })

  it('should be able to access a object-based, string theme property through dot notation', () => {
    const foo = themeGet('colors.blue')({ theme })

    expect(typeof foo).toBe('string')
    expect(foo).toBe('#12A5EC')
  })

  it('should be able to access a object-based, numeric theme property through dot notation', () => {
    const foo = themeGet('fontWeights.light')({ theme })

    expect(typeof foo).toBe('number')
    expect(foo).toBe(300)
  })

  it('should be able to access a array-based, string theme property through dot notation', () => {
    const foo = themeGet('borderStyles.1')({ theme })

    expect(typeof foo).toBe('string')
    expect(foo).toBe('dashed')
  })

  it('should be able to access a array-based, numeric theme property through dot notation', () => {
    const foo = themeGet('spaces.2')({ theme })

    expect(typeof foo).toBe('number')
    expect(foo).toBe(8)
  })

  it("should return a fallback value (if one is passed) when accessing a object-based property that doesn't exist", () => {
    expect(themeGet('colors.nope', 'fallbackColor')({ theme })).toBe('fallbackColor')
    expect(themeGet('fontWeights.nope', 400)({ theme })).toBe(400)
  })

  it("should return a fallback value (if one is passed) when accessing a array-based property that doesn't exist", () => {
    expect(themeGet('borderStyles.100', 'fallbackBorder')({ theme })).toBe('fallbackBorder')
    expect(themeGet('spaces.100', 24)({ theme })).toBe(24)
  })

  it('should return null and not throw an error if accessing a property that doesnt exist and no fallback is provided', () => {
    expect(themeGet('colors.nope')({ theme })).toBeNull()
  })
})
