import { timeTransformer } from '../time'

describe('When a number is passed', () => {
  it('should return the original number with seconds unit if the value passed is less than 1', () => {
    expect(timeTransformer(0.2)).toBe('0.2s')
    expect(timeTransformer(-0.7)).toBe('0.7s')
  })

  it('should return the original number with the milliseconds unit if the value passed is greater than 1', () => {
    expect(timeTransformer(200)).toBe('200ms')
    expect(timeTransformer(-700)).toBe('700ms')
  })
})

describe('When a numeric-string is passed', () => {
  it('should return the original number with seconds unit if the value passed is less than 1', () => {
    expect(timeTransformer('0.2')).toBe('0.2s')
    expect(timeTransformer('-0.7')).toBe('0.7s')
  })

  it('should return the original number with the milliseconds unit if the value passed is greater than 1', () => {
    expect(timeTransformer('200')).toBe('200ms')
    expect(timeTransformer('-700')).toBe('700ms')
  })
})

describe('When a non-numeric-string is passed', () => {
  it('should return the original value', () => {
    expect(timeTransformer('hello world')).toBe('hello world')
  })
})

describe('When an incorrect value is passed', () => {
  it('should return an empty string', () => {
    expect(timeTransformer(undefined as unknown as string)).toBe('')
    expect(timeTransformer(null as unknown as string)).toBe('')
    expect(timeTransformer(true as unknown as string)).toBe('')
    expect(timeTransformer(false as unknown as string)).toBe('')
    expect(timeTransformer({} as unknown as string)).toBe('')
  })
})
