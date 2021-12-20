import { escapeRegExp } from '../escapeRegExp'

/*








*/

describe('When an escaped character is passed', () => {
  it('should remove the character and return the safe string', () => {
    expect(escapeRegExp('t*st')).toBe('t\\*st')
    expect(escapeRegExp('t+st')).toBe('t\\+st')
    expect(escapeRegExp('te?t')).toBe('te\\?t')
  })
})
