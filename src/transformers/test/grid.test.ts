import { gridSpanTransformer, spanOperator } from '../grid'

/*








*/

describe('When a string is passed', () => {
  it('should be able to parse single values and return the originally passed string', () => {
    expect(gridSpanTransformer('3')).toBe('3')
  })

  it('should be able to parse start and end values and return the originally passed string', () => {
    expect(gridSpanTransformer('3 / 6')).toBe('3 / 6')
  })

  it('should be able to parse start and end values, with span statements, and return the originally passed string', () => {
    expect(gridSpanTransformer('3 / span 6')).toBe('3 / span 6')
    expect(gridSpanTransformer('span 3 / 6')).toBe('span 3 / 6')
  })
})

describe('When passed a number', () => {
  it('should return the originally passed number', () => {
    expect(gridSpanTransformer(3)).toBe(3)
  })
})

describe('When passing an array', () => {
  it('should be able to parse a single numeric value and return a string', () => {
    expect(gridSpanTransformer([3])).toBe('3')
  })

  it('should be able to parse a single string value and return a string', () => {
    expect(gridSpanTransformer(['3'])).toBe('3')
  })

  it('should be able to parse multiple numeric values and return a string of the two values separated by a "/"', () => {
    expect(gridSpanTransformer([3, 6])).toBe('3 / 6')
  })

  it('should be able to parse multiple string values and return a string of the two values separated by a "/"', () => {
    expect(gridSpanTransformer(['3', '6'])).toBe('3 / 6')
  })

  it('should be able to parse the span operator and convert the result to a span statement', () => {
    expect(gridSpanTransformer([3, `${spanOperator}6`])).toBe('3 / span 6')
    expect(gridSpanTransformer([`${spanOperator}3`, 6])).toBe('span 3 / 6')
  })
})

describe('When an incorrect value is passed', () => {
  it('should return undefined', () => {
    expect(gridSpanTransformer(undefined)).toBe(undefined)
    expect(gridSpanTransformer(null as unknown as string)).toBe(undefined)
    expect(gridSpanTransformer(true as unknown as string)).toBe(undefined)
    expect(gridSpanTransformer(false as unknown as string)).toBe(undefined)
    expect(gridSpanTransformer({} as unknown as string)).toBe(undefined)
  })
})
