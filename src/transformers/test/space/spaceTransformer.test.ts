import { spaceTransformer } from '../../space'

const arrScale = [2, 4, 6, 8, 12, 16, 24, 32]

const objScale = {
  extraSmall: 1,
  small: 2,
  medium: 4,
  large: 6,
  extraLarge: 8
}

/*









*/

describe('When a number is passed', () => {
  it('should return the originally passed number if no scale is passed', () => {
    expect(spaceTransformer(5)).toBe(5)
  })

  it('should be able to return negative values if the originally passed number is negative and no scale is passed', () => {
    expect(spaceTransformer(-5)).toBe(-5)
  })

  it('should return the originally passed number if a scale is passed but no corresponding value is found', () => {
    expect(spaceTransformer(5, objScale)).toBe(5)
  })

  it('should be able to return negative values if the originally passed number is negative and no corresponding scale value is found', () => {
    expect(spaceTransformer(-5, objScale)).toBe(-5)
  })

  it('should return a scale value if a scale is passed and a corresponding value is found', () => {
    expect(spaceTransformer(5, arrScale)).toBe(16)
  })

  it('should return a negative version of a scale value if a corresponding value is found and the original value is negative', () => {
    expect(spaceTransformer(-5, arrScale)).toBe(-16)
  })
})

describe('When a numeric-string is passed', () => {
  it('should return the originally passed string as a number if no scale is passed', () => {
    expect(spaceTransformer('5')).toBe(5)
  })

  it('should be able to return negative values if the originally passed string is negative and no scale is passed', () => {
    expect(spaceTransformer('-5')).toBe(-5)
  })

  it('should return the originally passed string if a scale is passed but no corresponding value is found', () => {
    expect(spaceTransformer('5', objScale)).toBe(5)
  })

  it('should be able to return negative values if the originally passed string is negative and no corresponding scale value is found', () => {
    expect(spaceTransformer('-5', objScale)).toBe(-5)
  })

  it('should return a scale value if a scale is passed and a corresponding value is found', () => {
    expect(spaceTransformer('5', arrScale)).toBe(16)
  })

  it('should return a negative version of a scale value if a corresponding value is found and the original value is negative', () => {
    expect(spaceTransformer('-5', arrScale)).toBe(-16)
  })
})

describe('When a non-numeric string is passed', () => {
  it('should return the originally passed string', () => {
    expect(spaceTransformer('5rem')).toBe('5rem')
  })
})

describe('When an incorrect value is passed', () => {
  it('should return undefined', () => {
    expect(spaceTransformer(undefined)).toBe(undefined)
    expect(spaceTransformer(null as unknown as string)).toBe(undefined)
    expect(spaceTransformer(true as unknown as string)).toBe(undefined)
    expect(spaceTransformer(false as unknown as string)).toBe(undefined)
    expect(spaceTransformer({} as unknown as string)).toEqual(undefined)
  })
})
