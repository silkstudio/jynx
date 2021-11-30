import { createMediaQuery } from '../../utils'

describe('createMediaQuery utility function', () => {
  it('should return a string', () => {
    expect(typeof createMediaQuery(1280)).toBe('string')
  })

  it('should return a px value as the min-width when a number is passed to it', () => {
    expect(createMediaQuery(1280)).toBe('@media screen and (min-width: 1280px)')
  })

  it('should return a string value as the min-width when a string is passed to it', () => {
    expect(createMediaQuery('60rem')).toBe('@media screen and (min-width: 60rem)')
  })
})
