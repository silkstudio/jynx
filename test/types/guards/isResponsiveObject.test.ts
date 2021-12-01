import { isResponsiveObject } from '../../../src/types'

const check = { _: 'red', sm: 'orange', md: 'yellow', lg: 'green' }

/*








*/

describe('isResponsiveObject type guard', () => {
  it('should return a boolean', () => {
    expect(typeof isResponsiveObject<string>(check)).toBe('boolean')
  })

  it('should return a true if an object of the specified type is passed', () => {
    expect(isResponsiveObject<string>(check)).toBe(true)
  })

  it('should return a false if an object is passed and it has no values', () => {
    expect(isResponsiveObject<string>({})).toBe(false)
  })

  it('should return a false if an object is passed without an `initial` (`_`) value', () => {
    const { _, ...rest } = check // eslint-disable-line

    expect(isResponsiveObject<string>(rest)).toBe(false)
  })

  it('should return a false if the value passed is not an object', () => {
    expect(isResponsiveObject<string>('foo')).toBe(false)
    expect(isResponsiveObject<string>(300)).toBe(false)
    expect(isResponsiveObject<string>(() => 'bar')).toBe(false)
    expect(isResponsiveObject<string>(['blue', 'red', 'green'])).toBe(false)
    expect(isResponsiveObject<string>(null)).toBe(false)
    expect(isResponsiveObject<string>(undefined)).toBe(false)
  })
})
