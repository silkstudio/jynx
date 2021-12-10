import { createMediaQuery } from '../index'

/*








*/

describe('When a string value is passed', () => {
  const value = '60rem'

  it('should return a string', () => {
    expect(typeof createMediaQuery(value)).toBe('string')
  })

  it('should return a min-width media query using the passed value', () => {
    expect(createMediaQuery(value)).toBe(`@media screen and (min-width: ${value})`)
  })
})

describe('When a numeric value is passed', () => {
  const value = 1280

  it('should return a string', () => {
    expect(typeof createMediaQuery(value)).toBe('string')
  })

  it('should return a min-width media query using the passed value converted to a px string', () => {
    expect(createMediaQuery(value)).toBe(`@media screen and (min-width: ${value}px)`)
  })
})
