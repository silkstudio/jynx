import { merge } from '../../utils'

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

describe('test merge utility', () => {
  it('should return combined object of `foo` and `bar`', () => {
    expect(merge(foo, bar)).toEqual({ a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f' })
  })
})
