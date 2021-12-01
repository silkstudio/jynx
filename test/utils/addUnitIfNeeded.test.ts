import { addUnitIfNeeded } from '../../src/utils'

/*








*/

describe('addUnitIfNeeded utility function', () => {
  it('should return a string', () => {
    expect(typeof addUnitIfNeeded('color', 'red')).toBe('string')
  })

  it('should return an empty string if the value is null, a boolean or an empty string', () => {
    expect(addUnitIfNeeded('color', null)).toBe('')
    expect(addUnitIfNeeded('color', true)).toBe('')
    expect(addUnitIfNeeded('color', false)).toBe('')
    expect(addUnitIfNeeded('color', '')).toBe('')
    expect(addUnitIfNeeded('color', undefined)).toBe('')
  })

  it('should return a px value if the passed value is a non-zero number and the style property does not exist in `unitless`', () => {
    expect(addUnitIfNeeded('width', 600)).toBe('600px')
  })

  it('should return the original value as a string if the passed value is a non-empty string', () => {
    expect(addUnitIfNeeded('width', '600')).toBe('600')
  })

  it('should return the original value as a string if the passed value is the number 0', () => {
    expect(addUnitIfNeeded('width', 0)).toBe('0')
  })

  it('should return the original value as a string if the passed property exists within `unitless`', () => {
    expect(addUnitIfNeeded('gridRow', 4)).toBe('4')
  })
})
