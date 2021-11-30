import { sort } from '../../src/utils'

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

describe('sort utility function', () => {
  it('should return an object', () => {
    expect(typeof sort(target) === 'object').toBe(true)
  })

  it('should sort an already sorted style object into ascending order based on the media-queries used as the objects keys', () => {
    expect(sort(target)).toMatchObject(target)
  })

  it('should sort an unsorted style object into ascending order based on the media-queries used as the objects keys', () => {
    expect(sort(unsorted)).toMatchObject(target)
  })

  it('should sort an unsorted style object whose base style is not the first item within the object, into ascending order based on the media-queries used as the objects keys', () => {
    expect(sort(unsortedMisplacedFirstItem)).toMatchObject(target)
  })

  it('should return an empty object if value passed is an empty object', () => {
    expect(sort({})).toEqual({})
  })
})
