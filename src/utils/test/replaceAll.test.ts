import { replaceAll } from '../replaceAll'

/*








*/

describe('When trying to replace multiple valuea within string', () => {
  it('should return a string with all instances of the target value replaced with the specified value', () => {
    expect(replaceAll('Hello world, hello world, hello world', 'world', 'there')).toBe('Hello there, hello there, hello there')
  })
})
