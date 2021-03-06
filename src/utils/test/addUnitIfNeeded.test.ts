import type { CSSProperties } from '../../types/css'
import { addUnitIfNeeded } from '../addUnitIfNeeded'

const unitsBasedProp = 'width'
const unitlessProp = 'gridRow'

/*








*/

describe('When a css-property is not defined', () => {
  // prettier-ignore
  const maybeUndefined = (undefined as unknown) as keyof CSSProperties

  it('should return the originally passed value if a non-numeric string is passed', () => {
    expect(typeof addUnitIfNeeded(maybeUndefined, 'red')).toBe('string')
    expect(addUnitIfNeeded(maybeUndefined, 'red')).toBe('red')
  })

  it('should return the originally passed value, converted to px, if a numeric string is passed', () => {
    expect(typeof addUnitIfNeeded(maybeUndefined, '5')).toBe('string')
    expect(addUnitIfNeeded(maybeUndefined, '5')).toBe('5px')
  })

  it('should return the originally passed value, converted to px, if a number is passed', () => {
    expect(typeof addUnitIfNeeded(maybeUndefined, 5)).toBe('string')
    expect(addUnitIfNeeded(maybeUndefined, 5)).toBe('5px')
  })
})

describe('When the passed value is not a string or a number', () => {
  // prettier-ignore
  const maybeNull = (null as unknown) as keyof CSSProperties
  const maybeTrue = true as unknown as keyof CSSProperties
  const maybeFalse = false as unknown as keyof CSSProperties

  it('should return an empty string when passed a `units-based` property and a value of null', () => {
    expect(typeof addUnitIfNeeded(unitsBasedProp, maybeNull)).toBe('string')
    expect(addUnitIfNeeded(unitsBasedProp, maybeNull)).toBe('')
  })

  it('should return an empty string when passed a `unitless` property and a value of null', () => {
    expect(typeof addUnitIfNeeded(unitlessProp, maybeNull)).toBe('string')
    expect(addUnitIfNeeded(unitlessProp, maybeNull)).toBe('')
  })

  it('should return an empty string when passed a `units-based` property and a boolean value', () => {
    expect(typeof addUnitIfNeeded(unitsBasedProp, maybeTrue)).toBe('string')
    expect(typeof addUnitIfNeeded(unitsBasedProp, maybeFalse)).toBe('string')
    expect(addUnitIfNeeded(unitsBasedProp, maybeTrue)).toBe('')
    expect(addUnitIfNeeded(unitsBasedProp, maybeFalse)).toBe('')
  })

  it('should return an empty string when passed a `unitless` property and a boolean value', () => {
    expect(typeof addUnitIfNeeded(unitlessProp, maybeTrue)).toBe('string')
    expect(typeof addUnitIfNeeded(unitlessProp, maybeFalse)).toBe('string')
    expect(addUnitIfNeeded(unitlessProp, maybeTrue)).toBe('')
    expect(addUnitIfNeeded(unitlessProp, maybeFalse)).toBe('')
  })

  it('should return an empty string when passed a `units-based` property and a value of undefined', () => {
    expect(typeof addUnitIfNeeded(unitsBasedProp, undefined)).toBe('string')
    expect(addUnitIfNeeded(unitsBasedProp, undefined)).toBe('')
  })

  it('should return an empty string when passed a `unitless` property and a value of undefined', () => {
    expect(typeof addUnitIfNeeded(unitlessProp, undefined)).toBe('string')
    expect(addUnitIfNeeded(unitlessProp, undefined)).toBe('')
  })
})

describe('When a css-property and a string value are passed', () => {
  it('should return an empty string when passed a `units-based` property and a value of ""', () => {
    expect(typeof addUnitIfNeeded(unitsBasedProp, '')).toBe('string')
    expect(addUnitIfNeeded(unitsBasedProp, '')).toBe('')
  })

  it('should return an empty string when passed a `unitless` property and a value of ""', () => {
    expect(typeof addUnitIfNeeded(unitlessProp, '')).toBe('string')
    expect(addUnitIfNeeded(unitlessProp, '')).toBe('')
  })

  it('should return the originally passed string when passed a `units-based` property and non-empty, non-numeric string', () => {
    expect(typeof addUnitIfNeeded(unitsBasedProp, 'red')).toBe('string')
    expect(addUnitIfNeeded(unitsBasedProp, 'red')).toBe('red')
  })

  it('should return the originally passed string when passed a `units-based` property and non-empty, numeric string', () => {
    expect(typeof addUnitIfNeeded(unitsBasedProp, '600')).toBe('string')
    expect(addUnitIfNeeded(unitsBasedProp, '600')).toBe('600px')
  })

  it('should return the originally passed string when passed a `unitless` property and non-empty string', () => {
    expect(typeof addUnitIfNeeded(unitlessProp, '4 / span 2')).toBe('string')
    expect(addUnitIfNeeded(unitlessProp, '4 / span 2')).toBe('4 / span 2')
  })
})

describe('When a css-property and a numeric value are passed', () => {
  it('should return the originally passed number as a string when passed a `units-based` property and the number 0', () => {
    expect(typeof addUnitIfNeeded(unitsBasedProp, 0)).toBe('string')
    expect(addUnitIfNeeded(unitsBasedProp, 0)).toBe('0')
  })

  it('should return the originally passed number as a string when passed a `unitless` property and the number 0', () => {
    expect(typeof addUnitIfNeeded(unitlessProp, 0)).toBe('string')
    expect(addUnitIfNeeded(unitlessProp, 0)).toBe('0')
  })

  it('should return the originally passed number converted to px as a string when passed a `units-based` property and a non-zero number', () => {
    expect(typeof addUnitIfNeeded(unitsBasedProp, 600)).toBe('string')
    expect(addUnitIfNeeded(unitsBasedProp, 600)).toBe('600px')
  })

  it('should return the originally passed number as a string when passed a `unitless` property and a non-zero number', () => {
    expect(typeof addUnitIfNeeded(unitlessProp, 2)).toBe('string')
    expect(addUnitIfNeeded(unitlessProp, 2)).toBe('2')
  })
})
