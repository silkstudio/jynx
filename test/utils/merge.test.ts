import { merge } from '../../src/utils'

const foo = {
  a: 'a',
  b: 'b',
  c: 'c'
}

const bar = {
  d: 'd',
  e: 'e',
  f: 'f'
}

/*








*/

describe('merge utility function', () => {
  it('should return combined object of `foo` and `bar`', () => {
    expect(merge(foo, bar)).toEqual({ a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f' })
  })
})
