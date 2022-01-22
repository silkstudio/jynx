import { spaceScaleTransformer } from '../../space'

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
    expect(spaceScaleTransformer(5)).toBe(5)
  })

  it('should be able to return negative values if the originally passed number is negative and no scale is passed', () => {
    expect(spaceScaleTransformer(-5)).toBe(-5)
  })

  it('should return the originally passed number if a scale is passed but no corresponding value is found', () => {
    expect(spaceScaleTransformer(5, objScale)).toBe(5)
  })

  it('should be able to return negative values if the originally passed number is negative and no corresponding scale value is found', () => {
    expect(spaceScaleTransformer(-5, objScale)).toBe(-5)
  })

  it('should return a scale value if a scale is passed and a corresponding value is found', () => {
    expect(spaceScaleTransformer(5, arrScale)).toBe(16)
  })

  it('should return a negative version of a scale value if a corresponding value is found and the original value is negative', () => {
    expect(spaceScaleTransformer(-5, arrScale)).toBe(-16)
  })
})

describe('When a numeric-string is passed', () => {
  it('should return the originally passed string as a number if no scale is passed', () => {
    expect(spaceScaleTransformer('5')).toBe(5)
  })

  it('should be able to return negative values if the originally passed string is negative and no scale is passed', () => {
    expect(spaceScaleTransformer('-5')).toBe(-5)
  })

  it('should return the originally passed string if a scale is passed but no corresponding value is found', () => {
    expect(spaceScaleTransformer('5', objScale)).toBe(5)
  })

  it('should be able to return negative values if the originally passed string is negative and no corresponding scale value is found', () => {
    expect(spaceScaleTransformer('-5', objScale)).toBe(-5)
  })

  it('should return a scale value if a scale is passed and a corresponding value is found', () => {
    expect(spaceScaleTransformer('5', arrScale)).toBe(16)
  })

  it('should return a negative version of a scale value if a corresponding value is found and the original value is negative', () => {
    expect(spaceScaleTransformer('-5', arrScale)).toBe(-16)
  })
})

describe('When a non-numeric string is passed', () => {
  it('should return the originally passed string', () => {
    expect(spaceScaleTransformer('5rem')).toBe('5rem')
  })

  it('should be able to return negative values if the originally passed string is negative and no scale is passed', () => {
    expect(spaceScaleTransformer('-5rem')).toBe('-5rem')
  })

  it('should return the originally passed string if a scale is passed but no corresponding value is found', () => {
    expect(spaceScaleTransformer('5rem', objScale)).toBe('5rem')
  })

  it('should be able to return negative values if the originally passed string is negative and no corresponding scale value is found', () => {
    expect(spaceScaleTransformer('-5rem', objScale)).toBe('-5rem')
  })

  it('should return a scale value if a scale is passed and a corresponding value is found', () => {
    expect(spaceScaleTransformer('medium', objScale)).toBe(4)
  })
})

describe('When an incorrect value is passed', () => {
  it('should return undefined', () => {
    expect(spaceScaleTransformer(undefined)).toBe(undefined)
    expect(spaceScaleTransformer(null as unknown as string)).toBe(undefined)
    expect(spaceScaleTransformer(true as unknown as string)).toBe(undefined)
    expect(spaceScaleTransformer(false as unknown as string)).toBe(undefined)
    expect(spaceScaleTransformer({} as unknown as string)).toEqual(undefined)
  })
})
