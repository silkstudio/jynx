import { isResponsiveObject } from '../guards'

const check = { _: 'red', sm: 'orange', md: 'yellow', lg: 'green' }

/*








*/

describe('When an object is passed', () => {
  it('should return a boolean', () => {
    expect(typeof isResponsiveObject<string>(check)).toBe('boolean')
  })

  it('should return a true if an object of the specified type is passed', () => {
    expect(isResponsiveObject<string>(check)).toBe(true)
  })

  it('should return a false if an empty object is passed (needs at least one value)', () => {
    expect(isResponsiveObject<string>({})).toBe(false)
  })

  it('should return a false if an object is passed without an `initial` (`_`) value', () => {
    const { _, ...rest } = check // eslint-disable-line

    expect(isResponsiveObject<string>(rest)).toBe(false)
  })
})

describe('When an array is not passed', () => {
  it('should return false when a string is passed to it', () => {
    expect(isResponsiveObject<string>('foo')).toBe(false)
  })

  it('should return false when a number is passed to it', () => {
    expect(isResponsiveObject<string>(300)).toBe(false)
  })

  it('should return false when a function is passed to it', () => {
    const func = (): string => 'bar'
    expect(isResponsiveObject<string>(func)).toBe(false)
  })

  it('should return false when an array is passed to it', () => {
    expect(isResponsiveObject<string>(['blue', 'red', 'green'])).toBe(false)
  })

  it('should return false when a boolean is passed to it', () => {
    expect(isResponsiveObject<string>(false)).toBe(false)
    expect(isResponsiveObject<string>(true)).toBe(false)
  })

  it('should return false when null is passed to it', () => {
    expect(isResponsiveObject<string>(null)).toBe(false)
  })

  it('should return false when undefined is passed to it', () => {
    expect(isResponsiveObject<string>(undefined)).toBe(false)
  })
})
