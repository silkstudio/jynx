import { isResponsiveArray } from '../../src/types'

const check = ['blue', 'red', 'green']

const breakpoints = [640, 960, 1280, 1366]

/*








*/

describe('isResponsiveArray type guard', () => {
  it('should return a boolean', () => {
    expect(typeof isResponsiveArray<string>(check)).toBe('boolean')
  })

  it('should return a true if an array of the specified type is passed', () => {
    expect(isResponsiveArray<string>(check)).toBe(true)
  })

  it('should return a false if an array is passed and it has no values', () => {
    expect(isResponsiveArray<string>([])).toBe(false)
  })

  it('should return a false if the value passed is not an array', () => {
    expect(isResponsiveArray<string>('foo')).toBe(false)
    expect(isResponsiveArray<string>(300)).toBe(false)
    expect(isResponsiveArray<string>(() => 'bar')).toBe(false)
    expect(isResponsiveArray<string>({ blue: 'blue', red: 'red', green: 'green' })).toBe(false)
    expect(isResponsiveArray<string>(null)).toBe(false)
    expect(isResponsiveArray<string>(undefined)).toBe(false)
  })

  it('should still return true, even if there are more values in the array that there are breakpoints in the theme', () => {
    const foo = [...check, ...check, ...check]

    expect(breakpoints.length < foo.length)
    expect(isResponsiveArray<string>(foo)).toBe(true)
  })
})
