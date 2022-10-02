// Types
import type { CSSProperties } from '../../types/css'

// Utils
import { parseResponsiveObject } from '../parseResponsiveObject'
import { mockTheme } from '../../theme'

/*








*/

describe('When a required argument is missing', () => {
  it('should return an empty object if a css property is not defined', () => {
    const maybeCssProperty = undefined as unknown as keyof CSSProperties
    const foo = parseResponsiveObject(maybeCssProperty, { _: 'red' }, mockTheme)

    expect(typeof foo).toBe('object')
    expect(foo).toEqual({})
  })

  it('should return an empty object if a style object is not defined', () => {
    const maybeArray = undefined as unknown as { _: 'red' }
    const foo = parseResponsiveObject('color', maybeArray, mockTheme)

    expect(typeof foo).toBe('object')
    expect(foo).toEqual({})
  })

  it('should return an empty object if a theme is not defined', () => {
    const maybeTheme = undefined as unknown as typeof mockTheme
    const foo = parseResponsiveObject('color', { _: 'red' }, maybeTheme)

    expect(typeof foo).toBe('object')
    expect(foo).toEqual({})
  })
})

describe('When passed a single item object', () => {
  const foo = parseResponsiveObject('color', { _: 'red' }, mockTheme)

  it('should return an object ', () => {
    expect(typeof foo).toBe('object')
  })

  it('should return an object with a single key/value pair', () => {
    expect(foo).toEqual({
      color: 'red'
    })
  })

  it('should reference the theme if a scale is provided and the value given corresponds to one in the theme', () => {
    expect(parseResponsiveObject('color', { _: 'red' }, mockTheme, 'colors')).toEqual({
      color: '#F2335D'
    })
  })

  it('should use the original key as a fallback if value given does not correspond to one in the theme', () => {
    expect(parseResponsiveObject('color', { _: 'aquamarine' }, mockTheme, 'colors')).toEqual({
      color: 'aquamarine'
    })
  })
})

describe('When passed an mutli-item object', () => {
  const foo = parseResponsiveObject('color', { _: 'red', sm: 'blue', md: 'green' }, mockTheme)

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

describe('When passed an mutli-item object where only select breakpoints are referenced', () => {
  const foo = parseResponsiveObject('color', { _: 'red', sm: 'blue', lg: 'green' }, mockTheme)

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
        color: 'green'
      }
    })
  })
})

describe('When passed an mutli-item object, not referenced in size order', () => {
  const foo = parseResponsiveObject('color', { lg: 'blue', _: 'red', sm: 'green' }, mockTheme)

  it('should return an object ', () => {
    expect(typeof foo).toBe('object')
  })

  it('should return a sorted style object, referencing the appropriate breakpoints', () => {
    expect(foo).toEqual({
      color: 'red',
      '@media screen and (min-width: 640px)': {
        color: 'green'
      },
      '@media screen and (min-width: 1280px)': {
        color: 'blue'
      }
    })
  })
})

describe('When an object-based theme scale is passed', () => {
  it('should return a sorted style object, referencing correlating theme values if they exist', () => {
    expect(parseResponsiveObject('color', { _: 'red', sm: 'blue', md: 'green' }, mockTheme, 'colors')).toEqual({
      color: '#F2335D',
      '@media screen and (min-width: 640px)': {
        color: '#12A5EC'
      },
      '@media screen and (min-width: 960px)': {
        color: '#7CD420'
      }
    })
  })

  it('should return a sorted style object, referencing correlating theme values if they exist, with styles defined for the appropriate breakpoints', () => {
    expect(parseResponsiveObject('color', { _: 'red', sm: 'blue', lg: 'green' }, mockTheme, 'colors')).toEqual({
      color: '#F2335D',
      '@media screen and (min-width: 640px)': {
        color: '#12A5EC'
      },
      '@media screen and (min-width: 1280px)': {
        color: '#7CD420'
      }
    })
  })

  it('should return a sorted style object, using the originally passed style if the value does not exist in the theme, with styles defined for the appropriate breakpoints', () => {
    expect(parseResponsiveObject('color', { _: 'aquamarine', sm: 'blue', lg: 'green' }, mockTheme, 'colors')).toEqual({
      color: 'aquamarine',
      '@media screen and (min-width: 640px)': {
        color: '#12A5EC'
      },
      '@media screen and (min-width: 1280px)': {
        color: '#7CD420'
      }
    })
  })
})

describe('When an array-based theme scale is passed', () => {
  it('should return a sorted style object, referencing correlating theme values if they exist', () => {
    // CAVEAT: Array values can be selected by passing numbers here but they must be strings, e.g. '1' not 1
    expect(parseResponsiveObject('padding', { _: '1', sm: '2', md: '3' }, mockTheme, 'space')).toEqual({
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
    expect(parseResponsiveObject('padding', { _: '1', sm: '2', lg: '3' }, mockTheme, 'space')).toEqual({
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
    expect(parseResponsiveObject('padding', { _: '48', sm: '5', lg: '6' }, mockTheme, 'space')).toEqual({
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
    ...mockTheme,
    breakpoints: {
      mobile: 540,
      tablet: 720,
      desktop: 1080
    }
  }

  /**
   * The following tests have been hidden with `@ts-expect-error` comments.
   * This is due to the fact that in order to use a custom theme with
   * typescript, the user needs to extend the DefaultTheme interface and merge
   * in there own properties using a declaration (.d.ts) file.
   */

  it('should return an object', () => {
    // @ts-ignore
    expect(typeof parseResponsiveObject('padding', { _: '48', mobile: '64', tablet: '128' }, customTheme, 'space')).toBe('object')
  })

  it('should return a sorted style object, using the new breakpoints', () => {
    // @ts-ignore
    expect(parseResponsiveObject('padding', { _: '48', mobile: '64', tablet: '128' }, customTheme, 'space')).toEqual({
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
    // @ts-ignore
    expect(parseResponsiveObject('padding', { _: '48', mobile: '64', desktop: '128' }, customTheme, 'space')).toEqual({
      padding: '48px',
      '@media screen and (min-width: 540px)': {
        padding: '64px'
      },
      '@media screen and (min-width: 1080px)': {
        padding: '128px'
      }
    })
  })

  it("should still be able to sort a style object that's not referenced in size order", () => {
    // @ts-ignore
    expect(parseResponsiveObject('padding', { mobile: '64', _: '48', desktop: '128' }, customTheme, 'space')).toEqual({
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
    // @ts-ignore
    expect(parseResponsiveObject('color', { _: 'red', mobile: 'blue', tablet: 'green' }, customTheme, 'colors')).toEqual({
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
    // @ts-ignore
    expect(parseResponsiveObject('color', { _: 'aquamarine', mobile: 'blue', desktop: 'green' }, customTheme, 'colors')).toEqual({
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
    // @ts-ignore
    expect(parseResponsiveObject('padding', { _: '1', mobile: '2', tablet: '3' }, customTheme, 'space')).toEqual({
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
    // @ts-ignore
    expect(parseResponsiveObject('padding', { _: '48', mobile: '5', desktop: '6' }, customTheme, 'space')).toEqual({
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
