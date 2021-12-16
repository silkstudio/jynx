import { sort } from '../sort'

const target = {
  color: 'red',
  '@media (min-width: 640px)': {
    color: 'orange'
  },
  '@media (min-width: 960px)': {
    color: 'yellow'
  },
  '@media (min-width: 1280px)': {
    color: 'green'
  }
}

const unsorted = {
  color: 'red',
  '@media (min-width: 1280px)': {
    color: 'green'
  },
  '@media (min-width: 640px)': {
    color: 'orange'
  },
  '@media (min-width: 960px)': {
    color: 'yellow'
  }
}

const unsortedMisplacedFirstItem = {
  '@media (min-width: 1280px)': {
    color: 'green'
  },
  '@media (min-width: 640px)': {
    color: 'orange'
  },
  color: 'red',
  '@media (min-width: 960px)': {
    color: 'yellow'
  }
}

/*








*/

describe('When passed an pre-sorted style object', () => {
  it('should return an object that matches the passed value', () => {
    expect(typeof sort(target)).toBe('object')
    expect(sort(target)).toMatchObject(target)
  })
})

describe('When passed an unsorted style object', () => {
  it('should return an object sorted into ascending order based on the media-queries used as the objects keys', () => {
    expect(typeof sort(unsorted)).toBe('object')
    expect(sort(unsorted)).toMatchObject(target)
  })
})

describe('When passed an unsorted style object where the base style is not the first item within the object', () => {
  it('should return an object sorted into ascending order based on the media-queries used as the objects keys', () => {
    expect(typeof sort(unsortedMisplacedFirstItem)).toBe('object')
    expect(sort(unsortedMisplacedFirstItem)).toMatchObject(target)
  })
})

describe('When passed an empty object', () => {
  it('should return an empty object', () => {
    expect(typeof sort({})).toBe('object')
    expect(sort({})).toEqual({})
  })
})

describe('When passed a non-oject value', () => {
  it('should return an empty object if passed a string', () => {
    const maybeString = 'string' as unknown as Record<string, any>
    expect(typeof sort(maybeString)).toBe('object')
    expect(sort(maybeString)).toEqual({})
  })

  it('should return an empty object if passed a number', () => {
    const maybeNumber = 5 as unknown as Record<string, any>
    expect(typeof sort(maybeNumber)).toBe('object')
    expect(sort(maybeNumber)).toEqual({})
  })

  it('should return an empty object if passed a boolean', () => {
    const maybeTrue = true as unknown as Record<string, any>
    const maybeFalse = false as unknown as Record<string, any>

    expect(typeof sort(maybeTrue)).toBe('object')
    expect(sort(maybeTrue)).toEqual({})
    expect(typeof sort(maybeFalse)).toBe('object')
    expect(sort(maybeFalse)).toEqual({})
  })

  it('should return an empty object if passed null', () => {
    const maybeNull = null as unknown as Record<string, any>
    expect(typeof sort(maybeNull)).toBe('object')
    expect(sort(maybeNull)).toEqual({})
  })

  it('should return an empty object if passed undefined', () => {
    const maybeUndefined = undefined as unknown as Record<string, any>
    expect(typeof sort(maybeUndefined)).toBe('object')
    expect(sort(maybeUndefined)).toEqual({})
  })
})
