import { lengthTransformer } from '../layout'

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

describe('When a number is passed with no scale', () => {
  it('should return the originally passed number if it is greater than 0', () => {
    expect(lengthTransformer(5)).toBe(5)
  })

  it('should return a percentage value as a string if the number is below 0', () => {
    expect(lengthTransformer(0.5)).toBe('50%')
  })
})

describe('When a number is passed with a scale', () => {
  it('should return the originally passed number if it is greater than 0 and doesnt correspond to a value within the given scale', () => {
    expect(lengthTransformer(12, arrScale)).toBe(12)
    expect(lengthTransformer(3, objScale)).toBe(3)
  })

  it('should return the scale value if the number passed is greater than 0 and corresponds to a value within the given scale', () => {
    expect(lengthTransformer(3, arrScale)).toBe(8)
  })

  it('should ignore the scale and return a percentage value as a string if the number is below 0', () => {
    expect(lengthTransformer(0.5, arrScale)).toBe('50%')
    expect(lengthTransformer(0.3, objScale)).toBe('30%')
  })
})

describe('When a numeric string is passed with no scale', () => {
  it('should return the originally passed string if it is greater than 0', () => {
    expect(lengthTransformer('5')).toBe('5')
  })

  it('should return a percentage value as a string if the number is below 0', () => {
    expect(lengthTransformer('0.1')).toBe('10%')
  })
})

describe('When a numeric string is passed with a scale', () => {
  it('should return the originally passed string if the number is greater than 0 and doesnt correspond to a value within the given scale', () => {
    expect(lengthTransformer('12', arrScale)).toBe('12')
    expect(lengthTransformer('3', objScale)).toBe('3')
  })

  it('should return the scale value if the numeric string passed is greater than 0 and corresponds to a value within the given scale', () => {
    expect(lengthTransformer('3', arrScale)).toBe(8)
  })

  it('should ignore the scale and return a percentage value as a string if the number is below 0', () => {
    expect(lengthTransformer('0.5', arrScale)).toBe('50%')
    expect(lengthTransformer('0.3', objScale)).toBe('30%')
  })
})

describe('When a non-numeric string is passed', () => {
  it('should return the originally passed string', () => {
    expect(lengthTransformer('5rem')).toBe('5rem')
  })
})

describe('When an incorrect value is passed', () => {
  it('should return undefined', () => {
    expect(lengthTransformer(undefined)).toBe(undefined)
    expect(lengthTransformer(null as unknown as string)).toBe(undefined)
    expect(lengthTransformer(true as unknown as string)).toBe(undefined)
    expect(lengthTransformer(false as unknown as string)).toBe(undefined)
    expect(lengthTransformer({} as unknown as string)).toBe(undefined)
  })
})
