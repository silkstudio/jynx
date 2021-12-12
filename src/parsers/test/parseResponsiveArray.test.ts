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
    const foo = parseResponsiveArray(maybeCssProperty, ['red'], systemTheme)

    expect(typeof foo).toBe('object')
    expect(foo).toEqual({})
  })

  it('should return an empty object if a style object is not defined', () => {
    const maybeArray = undefined as unknown as ['red']
    const foo = parseResponsiveArray('color', maybeArray, systemTheme)

    expect(typeof foo).toBe('object')
    expect(foo).toEqual({})
  })

  it('should return an empty object if a theme is not defined', () => {
    const maybeTheme = undefined as unknown as typeof systemTheme
    const foo = parseResponsiveArray('color', ['red'], maybeTheme)

    expect(typeof foo).toBe('object')
    expect(foo).toEqual({})
  })
})

describe('When passed a single item array', () => {
  const foo = parseResponsiveArray('color', ['red'], systemTheme)

  it('should return an object ', () => {
    expect(typeof foo).toBe('object')
  })

  it('should return an object with a single key/value pair of color: red', () => {
    expect(foo).toEqual({
      color: 'red'
    })
  })
})

describe('When passed an mutli-item array', () => {
  const foo = parseResponsiveArray('color', ['red', 'blue', 'green'], systemTheme)

  it('should return an object ', () => {
    expect(typeof foo).toBe('object')
  })

  it('should return a style object sorted by its media query keys', () => {
    expect(foo).toEqual({
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
  const foo = parseResponsiveArray('color', ['red', 'blue', null, 'yellow'], systemTheme)

  it('should return an object ', () => {
    expect(typeof foo).toBe('object')
  })

  it('should return a style object, sorted by its media query keys and skipping values (and breakpoints) where null is passed as the style', () => {
    expect(foo).toEqual({
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

describe('When an object-based theme scale is passed', () => {
  it('should return a sorted style object, referencing correlating theme values if they exist', () => {
    expect(parseResponsiveArray('color', ['red', 'blue', 'yellow'], systemTheme, 'colors')).toEqual({
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
    expect(parseResponsiveArray('color', ['red', 'blue', null, 'yellow'], systemTheme, 'colors')).toEqual({
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
    expect(parseResponsiveArray('color', ['aquamarine', 'blue', null, 'yellow'], systemTheme, 'colors')).toEqual({
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

describe('When an array-based theme scale is passed', () => {
  it('should return a sorted style object, referencing correlating theme values if they exist', () => {
    // CAVEAT: Array values can be selected by passing numbers here but they must be strings, e.g. '1' not 1
    expect(parseResponsiveArray('padding', ['1', '2', '3'], systemTheme, 'spaces')).toEqual({
      padding: '4px',
      '@media screen and (min-width: 640px)': {
        padding: '8px'
      },
      '@media screen and (min-width: 960px)': {
        padding: '16px'
      }
    })
  })

  it('should return a sorted style object, referencing correlating theme values if they exist, with styles defined for the appropriate breakpoints', () => {
    expect(parseResponsiveArray('padding', ['1', '2', null, '3'], systemTheme, 'spaces')).toEqual({
      padding: '4px',
      '@media screen and (min-width: 640px)': {
        padding: '8px'
      },
      '@media screen and (min-width: 1280px)': {
        padding: '16px'
      }
    })
  })

  it('should return a sorted style object, using the originally passed style if the value does not exist in the theme, with styles defined for the appropriate breakpoints', () => {
    expect(parseResponsiveArray('padding', ['48', '5', null, '6'], systemTheme, 'spaces')).toEqual({
      padding: '48px',
      '@media screen and (min-width: 640px)': {
        padding: '64px'
      },
      '@media screen and (min-width: 1280px)': {
        padding: '128px'
      }
    })
  })
})

describe('When using alternative breakpoints from a user-defined theme', () => {
  const customTheme = {
    ...systemTheme,
    breakpoints: {
      small: 540,
      medium: 720,
      large: 1080
    }
  }

  it('should return an object', () => {
    expect(typeof parseResponsiveArray('padding', ['48', '64', '128'], customTheme, 'spaces')).toBe('object')
  })

  it('should return a sorted style object, using the new breakpoints', () => {
    expect(parseResponsiveArray('padding', ['48', '64', '128'], customTheme, 'spaces')).toEqual({
      padding: '48px',
      '@media screen and (min-width: 540px)': {
        padding: '64px'
      },
      '@media screen and (min-width: 720px)': {
        padding: '128px'
      }
    })
  })

  it('should still be able to skip breakpoint values that are not defined in the ResponsiveObject', () => {
    expect(parseResponsiveArray('padding', ['48', '64', null, '128'], customTheme, 'spaces')).toEqual({
      padding: '48px',
      '@media screen and (min-width: 540px)': {
        padding: '64px'
      },
      '@media screen and (min-width: 1080px)': {
        padding: '128px'
      }
    })
  })

  it('should still be able to access object-based theme scales', () => {
    expect(parseResponsiveArray('color', ['red', 'blue', 'green'], customTheme, 'colors')).toEqual({
      color: '#F2335D',
      '@media screen and (min-width: 540px)': {
        color: '#12A5EC'
      },
      '@media screen and (min-width: 720px)': {
        color: '#7CD420'
      }
    })
  })

  it('should still be able return the originally passed style if it does not exist within the theme, when accessing object-based theme scales', () => {
    expect(parseResponsiveArray('color', ['aquamarine', 'blue', null, 'green'], customTheme, 'colors')).toEqual({
      color: 'aquamarine',
      '@media screen and (min-width: 540px)': {
        color: '#12A5EC'
      },
      '@media screen and (min-width: 1080px)': {
        color: '#7CD420'
      }
    })
  })

  it('should still be able to access arrray-based theme scales', () => {
    // CAVEAT: Array values can be selected by passing numbers here but they must be strings, e.g. '1' not 1
    expect(parseResponsiveArray('padding', ['1', '2', '3'], customTheme, 'spaces')).toEqual({
      padding: '4px',
      '@media screen and (min-width: 540px)': {
        padding: '8px'
      },
      '@media screen and (min-width: 720px)': {
        padding: '16px'
      }
    })
  })

  it('should still be able return the originally passed style if it does not exist within the theme, when accessing array-based theme scales', () => {
    expect(parseResponsiveArray('padding', ['48', '5', null, '6'], customTheme, 'spaces')).toEqual({
      padding: '48px',
      '@media screen and (min-width: 540px)': {
        padding: '64px'
      },
      '@media screen and (min-width: 1080px)': {
        padding: '128px'
      }
    })
  })
})
