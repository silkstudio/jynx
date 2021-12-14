import { isResponsiveStyle } from '../guards'

const objCheck = { _: 'red', sm: 'orange', md: 'yellow', lg: 'green' }
const arrCheck = ['red', 'orange', 'yellow', 'green']

const breakpoints = [640, 960, 1280, 1366]

/*








*/

describe('When an object is passed', () => {
  it('should return a boolean', () => {
    expect(typeof isResponsiveStyle<string>(objCheck)).toBe('boolean')
  })

  it('should return true if a ResponsiveObject is passed', () => {
    expect(isResponsiveStyle<string>(objCheck)).toBe(true)
  })

  it('should return a false if an object is passed and it has no values', () => {
    expect(isResponsiveStyle<string>({})).toBe(false)
  })

  it('should return a false if an object is passed without an `initial` (`_`) value', () => {
    const { _, ...rest } = objCheck // eslint-disable-line
    expect(isResponsiveStyle<string>(rest)).toBe(false)
  })
})

describe('When an array is passed', () => {
  it('should return a boolean', () => {
    expect(typeof isResponsiveStyle<string>(arrCheck)).toBe('boolean')
  })

  it('should return true if a ResponsiveArray is passed', () => {
    expect(isResponsiveStyle<string>(arrCheck)).toBe(true)
  })

  it('should return a false if an array is passed and it has no values', () => {
    expect(isResponsiveStyle<string>([])).toBe(false)
  })

  it('should still return true, even if there are more values in the array that there are breakpoints in the theme', () => {
    const foo = [...arrCheck, ...arrCheck, ...arrCheck]

    expect(breakpoints.length < foo.length)
    expect(isResponsiveStyle<string>(foo)).toBe(true)
  })
})

describe('When the value passed is not an object or an array', () => {
  it('should return false when a string is passed to it', () => {
    expect(isResponsiveStyle<string>('foo')).toBe(false)
  })

  it('should return false when a number is passed to it', () => {
    expect(isResponsiveStyle<string>(300)).toBe(false)
  })

  it('should return false when a function is passed to it', () => {
    const func = (): string => 'bar'
    expect(isResponsiveStyle<string>(func)).toBe(false)
  })

  it('should return false when a boolean is passed to it', () => {
    expect(isResponsiveStyle<string>(false)).toBe(false)
    expect(isResponsiveStyle<string>(true)).toBe(false)
  })

  it('should return false when null is passed to it', () => {
    expect(isResponsiveStyle<string>(null)).toBe(false)
  })

  it('should return false when undefined is passed to it', () => {
    expect(isResponsiveStyle<string>(undefined)).toBe(false)
  })
})
