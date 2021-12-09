import { isResponsiveArray } from '../../../src/types'

const check = ['blue', 'red', 'green']

const breakpoints = [640, 960, 1280, 1366]

/*








*/

describe('When an array is passed', () => {
  it('should return a boolean', () => {
    expect(typeof isResponsiveArray<string>(check)).toBe('boolean')
  })

  it('should return a true if an array of the specified type is passed', () => {
    expect(isResponsiveArray<string>(check)).toBe(true)
  })

  it('should return a false if an empty array is passed (needs at least one value)', () => {
    expect(isResponsiveArray<string>([])).toBe(false)
  })

  it('should still return true, even if there are more values in the array that there are breakpoints in the theme', () => {
    const foo = [...check, ...check, ...check]

    expect(breakpoints.length < foo.length)
    expect(isResponsiveArray<string>(foo)).toBe(true)
  })
})

describe('When an array is not passed', () => {
  it('should return false when a string is passed to it', () => {
    expect(isResponsiveArray<string>('foo')).toBe(false)
  })

  it('should return false when a number is passed to it', () => {
    expect(isResponsiveArray<string>(300)).toBe(false)
  })

  it('should return false when a function is passed to it', () => {
    const func = (): string => 'bar'
    expect(isResponsiveArray<string>(func)).toBe(false)
  })

  it('should return false when an object is passed to it', () => {
    expect(isResponsiveArray<string>({ blue: 'blue', red: 'red', green: 'green' })).toBe(false)
  })

  it('should return false when a ResponsiveObject is passed to it', () => {
    expect(isResponsiveArray<string>({ _: 'blue', sm: 'red', md: 'green' })).toBe(false)
  })

  it('should return false when a boolean is passed to it', () => {
    expect(isResponsiveArray<string>(false)).toBe(false)
    expect(isResponsiveArray<string>(true)).toBe(false)
  })

  it('should return false when null is passed to it', () => {
    expect(isResponsiveArray<string>(null)).toBe(false)
  })

  it('should return false when undefined is passed to it', () => {
    expect(isResponsiveArray<string>(undefined)).toBe(false)
  })
})
