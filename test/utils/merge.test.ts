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

const baz = {
  g: 'g',
  h: 'h',
  i: 'i'
}

/*








*/

describe('When passed a single object', () => {
  it('should return the passed object', () => {
    expect(merge(foo)).toEqual(foo)
  })
})

describe('When passed multiple objects', () => {
  it('should return a single object containing all the properties from the argument objects when two args are passed', () => {
    expect(merge(foo, bar)).toEqual({ a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f' })
  })

  it('should return a single object containing all the properties from the argument objects when three args are passed', () => {
    expect(merge(foo, bar, baz)).toEqual({ a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f', g: 'g', h: 'h', i: 'i' })
  })
})

describe('When passed non-object values', () => {
  it('should disguard any values passed that are as string', () => {
    const maybeString = 'object' as any

    expect(merge(foo, bar, maybeString)).toEqual({ a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f' })
    expect(merge(foo, maybeString, bar)).toEqual({ a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f' })
    expect(merge(maybeString, foo, bar)).toEqual({ a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f' })
    expect(merge(maybeString)).toEqual({})
  })

  it('should disguard any values passed that are as string', () => {
    const maybeNumber = 5 as any

    expect(merge(foo, bar, maybeNumber)).toEqual({ a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f' })
    expect(merge(foo, maybeNumber, bar)).toEqual({ a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f' })
    expect(merge(maybeNumber, foo, bar)).toEqual({ a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f' })
    expect(merge(maybeNumber)).toEqual({})
  })

  it('should disguard any values passed that are `true`', () => {
    const maybeTrue = true as any

    expect(merge(foo, bar, maybeTrue)).toEqual({ a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f' })
    expect(merge(foo, maybeTrue, bar)).toEqual({ a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f' })
    expect(merge(maybeTrue, foo, bar)).toEqual({ a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f' })
    expect(merge(maybeTrue)).toEqual({})
  })

  it('should disguard any values passed that are `false`', () => {
    const maybeFalse = false as any

    expect(merge(foo, bar, maybeFalse)).toEqual({ a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f' })
    expect(merge(foo, maybeFalse, bar)).toEqual({ a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f' })
    expect(merge(maybeFalse, foo, bar)).toEqual({ a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f' })
    expect(merge(maybeFalse)).toEqual({})
  })

  it('should disguard any values passed that are `null`', () => {
    const maybeNull = null as any

    expect(merge(foo, bar, maybeNull)).toEqual({ a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f' })
    expect(merge(foo, maybeNull, bar)).toEqual({ a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f' })
    expect(merge(maybeNull, foo, bar)).toEqual({ a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f' })
    expect(merge(maybeNull)).toEqual({})
  })

  it('should disguard any values passed that are `undefined`', () => {
    expect(merge(foo, bar, undefined)).toEqual({ a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f' })
    expect(merge(foo, undefined, bar)).toEqual({ a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f' })
    expect(merge(undefined, foo, bar)).toEqual({ a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f' })
    expect(merge(undefined)).toEqual({})
  })
})
