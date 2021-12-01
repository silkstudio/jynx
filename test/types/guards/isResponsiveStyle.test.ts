import { isResponsiveStyle } from '../../../src/types'

const objCheck = { _: 'red', sm: 'orange', md: 'yellow', lg: 'green' }
const arrCheck = ['red', 'orange', 'yellow', 'green']

const breakpoints = [640, 960, 1280, 1366]

/*








*/

describe('isResponsiveObject type guard', () => {
  it('should return a boolean', () => {
    expect(typeof isResponsiveStyle<string>(objCheck)).toBe('boolean')
  })

  it('should return true if a responsive object is passed', () => {
    expect(isResponsiveStyle<string>(objCheck)).toBe(true)
  })

  it('should return true if a responsive array is passed', () => {
    expect(isResponsiveStyle<string>(arrCheck)).toBe(true)
  })

  it('should return a false if an object is passed and it has no values', () => {
    expect(isResponsiveStyle<string>({})).toBe(false)
  })

  it('should return a false if an object is passed without an `initial` (`_`) value', () => {
    const { _, ...rest } = objCheck // eslint-disable-line
    expect(isResponsiveStyle<string>(rest)).toBe(false)
  })

  it('should return a false if an array is passed and it has no values', () => {
    expect(isResponsiveStyle<string>([])).toBe(false)
  })

  it('should still return true, even if there are more values in the array that there are breakpoints in the theme', () => {
    const foo = [...arrCheck, ...arrCheck, ...arrCheck]

    expect(breakpoints.length < foo.length)
    expect(isResponsiveStyle<string>(foo)).toBe(true)
  })

  it('should return a false if the value passed is not an object', () => {
    expect(isResponsiveStyle<string>('foo')).toBe(false)
    expect(isResponsiveStyle<string>(300)).toBe(false)
    expect(isResponsiveStyle<string>(() => 'bar')).toBe(false)
    expect(isResponsiveStyle<string>(null)).toBe(false)
    expect(isResponsiveStyle<string>(undefined)).toBe(false)
  })
})
