// Types
import { Properties as CSS } from 'csstype'

// Utils
import { parseResponsiveArray } from '../parseResponsiveArray'
import { systemTheme } from '../../theme'

/*








*/

describe('When a required argument is missing', () => {
  it('should return an empty object if a css property is not defined', () => {
    const maybeCssProperty = undefined as unknown as keyof CSS
    const parser = parseResponsiveArray(maybeCssProperty, ['red'], systemTheme)

    expect(typeof parser).toBe('object')
    expect(parser).toEqual({})
  })

  it('should return an empty object if a style object is not defined', () => {
    const maybeArray = undefined as unknown as ['red']
    const parser = parseResponsiveArray('color', maybeArray, systemTheme)

    expect(typeof parser).toBe('object')
    expect(parser).toEqual({})
  })

  it('should return an empty object if a theme is not defined', () => {
    const maybeTheme = undefined as unknown as typeof systemTheme
    const parser = parseResponsiveArray('color', ['red'], maybeTheme)

    expect(typeof parser).toBe('object')
    expect(parser).toEqual({})
  })
})

describe('When passed a single item array', () => {
  const parser = parseResponsiveArray('color', ['red'], systemTheme)

  it('should return an object ', () => {
    expect(typeof parser).toBe('object')
  })

  it('should return an object with a single key/value pair of color: red', () => {
    expect(parser).toEqual({
      color: 'red'
    })
  })
})

describe('When passed an mutli-item array', () => {
  const parser = parseResponsiveArray('color', ['red', 'blue', 'green'], systemTheme)

  it('should return an object ', () => {
    expect(typeof parser).toBe('object')
  })

  it('should return a style object sorted by its media query keys', () => {
    expect(parser).toEqual({
      color: 'red',
      '@media screen and (min-width: 640px)': {
        color: 'blue'
      },
      '@media screen and (min-width: 960px)': {
        color: 'green'
      }
    })
  })
})

describe('When passed an mutli-item array containing null', () => {
  const parser = parseResponsiveArray('color', ['red', 'blue', null, 'yellow'], systemTheme, 'colors')

  it('should return an object ', () => {
    expect(typeof parser).toBe('object')
  })

  it('should return a style object, sorted by its media query keys and skipping values (and breakpoints) where null is passed as the style', () => {
    expect(parser).toEqual({
      color: 'red',
      '@media screen and (min-width: 640px)': {
        color: 'blue'
      },
      '@media screen and (min-width: 1280px)': {
        color: 'yellow'
      }
    })
  })
})

describe('When a theme scale is passed', () => {
  const parser = parseResponsiveArray('color', ['red', 'blue', 'yellow'], systemTheme, systemTheme.colors)

  it('should return an object ', () => {
    expect(typeof parser).toBe('object')
  })

  it('should return a sorted style object, referencing correlating theme values if they exist', () => {
    expect(parser).toEqual({
      color: '#F2335D',
      '@media screen and (min-width: 640px)': {
        color: '#12A5EC'
      },
      '@media screen and (min-width: 960px)': {
        color: '#FFCC00'
      }
    })
  })

  it('should return a sorted style object, referencing correlating theme values if they exist and skipping values (and breakpoints) where null is passed as the style', () => {
    expect(parseResponsiveArray('color', ['red', 'blue', null, 'yellow'], systemTheme, systemTheme.colors)).toEqual({
      color: '#F2335D',
      '@media screen and (min-width: 640px)': {
        color: '#12A5EC'
      },
      '@media screen and (min-width: 1280px)': {
        color: '#FFCC00'
      }
    })
  })

  it('should return a sorted style object, using the originally passed style if the value does not exist in the theme', () => {
    expect(parseResponsiveArray('color', ['aquamarine', 'blue', null, 'yellow'], systemTheme, systemTheme.colors)).toEqual({
      color: 'aquamarine',
      '@media screen and (min-width: 640px)': {
        color: '#12A5EC'
      },
      '@media screen and (min-width: 1280px)': {
        color: '#FFCC00'
      }
    })
  })
})
