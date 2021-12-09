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

describe('When passed a single-level key', () => {
  it("should return a theme scale as an object if it's corresponding theme property is defined as an object", () => {
    const foo = themeGet('colors')({ theme })
    expect(typeof foo).toBe('object')
    expect(foo).toMatchObject(testTheme.colors)
  })

  it("should return a theme scale as an array if it's corresponding theme property is defined as an array", () => {
    const foo = themeGet('spaces')({ theme })
    expect(Array.isArray(foo)).toBe(true)
    expect(foo).toEqual(testTheme.spaces)
  })

  it('should return null if accessing a value that doesnt exist', () => {
    expect(themeGet('nope')({ theme })).toBeNull()
    expect(themeGet(2)({ theme })).toBeNull()
  })
})

describe('When passed a dotted key', () => {
  it('should be able to access an object-based, string theme property', () => {
    const foo = themeGet('colors.blue')({ theme })
    expect(typeof foo).toBe('string')
    expect(foo).toBe('#12A5EC')
  })

  it('should be able to access a object-based, numeric theme property', () => {
    const foo = themeGet('fontWeights.light')({ theme })
    expect(typeof foo).toBe('number')
    expect(foo).toBe(300)
  })

  it('should be able to access a array-based, string theme property', () => {
    const foo = themeGet('borderStyles.1')({ theme })
    expect(typeof foo).toBe('string')
    expect(foo).toBe('dashed')
  })

  it('should be able to access a array-based, numeric theme property', () => {
    const foo = themeGet('spaces.2')({ theme })

    expect(typeof foo).toBe('number')
    expect(foo).toBe(8)
  })

  it('should return null and not throw an error if accessing a property that doesnt exist', () => {
    expect(themeGet('colors.nope')({ theme })).toBeNull()
  })
})

describe('When passing a fallback value', () => {
  it('should return the accessed property if it exists', () => {
    const foo = themeGet('colors.blue', '#ffffff')({ theme })
    expect(typeof foo).toBe('string')
    expect(foo).toBe('#12A5EC')
  })

  it("should return a given string fallback value when accessing a object-based property that doesn't exist", () => {
    expect(typeof themeGet('colors.nope', 'fallbackColor')({ theme })).toBe('string')
    expect(themeGet('colors.nope', 'fallbackColor')({ theme })).toBe('fallbackColor')
  })

  it("should return a given numeric fallback value when accessing a object-based property that doesn't exist", () => {
    expect(typeof themeGet('fontWeights.nope', 400)({ theme })).toBe('number')
    expect(themeGet('fontWeights.nope', 400)({ theme })).toBe(400)
  })

  it("should return a given string fallback value when accessing a array-based property that doesn't exist", () => {
    expect(typeof themeGet('borderStyles.100', 'fallbackBorder')({ theme })).toBe('string')
    expect(themeGet('borderStyles.100', 'fallbackBorder')({ theme })).toBe('fallbackBorder')
  })

  it("should return a given numeric fallback value when accessing a array-based property that doesn't exist", () => {
    expect(typeof themeGet('fontWeights.nope', 400)({ theme })).toBe('number')

    expect(typeof themeGet('spaces.100', 24)({ theme })).toBe('number')
    expect(themeGet('spaces.100', 24)({ theme })).toBe(24)
  })

  it("should return a given array-typed fallback value when accessing a array-typed scale that doesn't exist", () => {
    const foo = themeGet('nope', [400, 500, 600])({ theme })

    expect(Array.isArray(foo)).toBe(true)
    expect(foo).toEqual([400, 500, 600])
  })

  it("should return a given object-typed fallback value when accessing a object-typed scale that doesn't exist", () => {
    const foo = themeGet('nope', { a: 'a', b: 'b', c: 'c' })({ theme })

    expect(typeof foo).toBe('object')
    expect(foo).toMatchObject({ a: 'a', b: 'b', c: 'c' })
  })
})
