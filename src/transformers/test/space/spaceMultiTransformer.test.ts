import { spaceMultiTransformer } from '../../space'

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

describe('When a numeric array is passed', () => {
  it('should return a string of the originally passed numbers as px values if no scale is passed', () => {
    expect(spaceMultiTransformer([8, 16, 24, 16])).toBe('8px 16px 24px 16px')
  })

  it('should be able to return negative values if the originally passed numbers are negative', () => {
    expect(spaceMultiTransformer([-8, -16, -24, -16])).toBe('-8px -16px -24px -16px')
  })

  it('should return a string of the originally passed numbers as px values if a scale is passed but no corresponding values are found', () => {
    expect(spaceMultiTransformer([8, 16, 24, 16], objScale)).toBe('8px 16px 24px 16px')
  })

  it('should be able to return negative values if the originally passed numbers are negative and no corresponding scale values are found', () => {
    expect(spaceMultiTransformer([-8, -16, -24, -16], objScale)).toBe('-8px -16px -24px -16px')
  })

  it('should return scale values if a scale is passed and corresponding values are found', () => {
    expect(spaceMultiTransformer([2, 3, 2, 3], arrScale)).toBe('6px 8px 6px 8px')
  })

  it('should return a negative version of a scale value if a corresponding value is found and the original value is negative', () => {
    expect(spaceMultiTransformer([-3, -4, -3, -4], arrScale)).toBe('-8px -12px -8px -12px')
  })
})

describe('When a numeric string-based array is passed', () => {
  it('should return a string of the originally passed strings as px values if no scale is passed', () => {
    expect(spaceMultiTransformer(['8', '16', '24', '16'])).toBe('8px 16px 24px 16px')
  })

  it('should be able to return negative values if the originally passed strings are negative', () => {
    expect(spaceMultiTransformer(['-8', '-16', '-24', '-16'])).toBe('-8px -16px -24px -16px')
  })

  it('should return a string of the originally passed strings as px values if a scale is passed but no corresponding values are found', () => {
    expect(spaceMultiTransformer(['8', '16', '24', '16'], objScale)).toBe('8px 16px 24px 16px')
  })

  it('should be able to return negative values if the originally passed strings are negative and no corresponding scale values are found', () => {
    expect(spaceMultiTransformer(['-8', '-16', '-24', '-16'], objScale)).toBe('-8px -16px -24px -16px')
  })

  it('should return scale values if a scale is passed and corresponding values are found', () => {
    expect(spaceMultiTransformer(['2', '3', '2', '3'], arrScale)).toBe('6px 8px 6px 8px')
  })

  it('should return a negative version of a scale value if a corresponding value is found and the original value is negative', () => {
    expect(spaceMultiTransformer(['-3', '-4', '-3', '-4'], arrScale)).toBe('-8px -12px -8px -12px')
  })
})

describe('When a non-numeric string-based array is passed', () => {
  it('should return a string of the originally passed strings if no scale is passed', () => {
    expect(spaceMultiTransformer(['8rem', '16rem', '24rem', '16rem'])).toBe('8rem 16rem 24rem 16rem')
  })

  it('should be able to return negative values if the originally passed strings are negative', () => {
    expect(spaceMultiTransformer(['-8rem', '-16rem', '-24rem', '-16rem'])).toBe('-8rem -16rem -24rem -16rem')
  })

  it('should return a string of the originally passed strings if a scale is passed but no corresponding values are found', () => {
    expect(spaceMultiTransformer(['8rem', '16rem', '24rem', '16rem'], objScale)).toBe('8rem 16rem 24rem 16rem')
  })

  it('should be able to return negative values if the originally passed strings are negative and no corresponding scale values are found', () => {
    expect(spaceMultiTransformer(['-8rem', '-16rem', '-24rem', '-16rem'], objScale)).toBe('-8rem -16rem -24rem -16rem')
  })

  it('should return scale values if a scale is passed and corresponding values are found', () => {
    expect(spaceMultiTransformer(['medium', 'large', 'medium', 'large'], objScale)).toBe('4px 6px 4px 6px')
  })
})

describe('When an incorrect value is passed', () => {
  it('should return undefined', () => {
    expect(spaceMultiTransformer(undefined)).toBe(undefined)
    expect(spaceMultiTransformer(null as unknown as string)).toBe(undefined)
    expect(spaceMultiTransformer(true as unknown as string)).toBe(undefined)
    expect(spaceMultiTransformer(false as unknown as string)).toBe(undefined)
    expect(spaceMultiTransformer({} as unknown as string)).toEqual(undefined)
  })
})
