// Types
import type { CSSProperties } from '../../types/css'

// Utils
import { parseResponsiveObject } from '../parseResponsiveObject'
import { systemTheme } from '../../theme'

/*








*/

describe('When a required argument is missing', () => {
  it('should return an empty object if a css property is not defined', () => {
    const maybeCssProperty = undefined as unknown as keyof CSSProperties
    const foo = parseResponsiveObject(maybeCssProperty, { _: 'red' }, systemTheme)

    expect(typeof foo).toBe('object')
    expect(foo).toEqual({})
  })

  it('should return an empty object if a style object is not defined', () => {
    const maybeArray = undefined as unknown as { _: 'red' }
    const foo = parseResponsiveObject('color', maybeArray, systemTheme)

    expect(typeof foo).toBe('object')
    expect(foo).toEqual({})
  })

  it('should return an empty object if a theme is not defined', () => {
    const maybeTheme = undefined as unknown as typeof systemTheme
    const foo = parseResponsiveObject('color', { _: 'red' }, maybeTheme)

    expect(typeof foo).toBe('object')
    expect(foo).toEqual({})
  })
})

describe('When passed a single item object', () => {
  const foo = parseResponsiveObject('color', { _: 'red' }, systemTheme)

  it('should return an object ', () => {
    expect(typeof foo).toBe('object')
  })

  it('should return an object with a single key/value pair', () => {
    expect(foo).toEqual({
      color: 'red'
    })
  })

  it('should reference the theme if a scale is provided and the value given corresponds to one in the theme', () => {
    expect(parseResponsiveObject('color', { _: 'red' }, systemTheme, 'colors')).toEqual({
      color: '#F2335D'
    })
  })

  it('should use the original key as a fallback if value given does not correspond to one in the theme', () => {
    expect(parseResponsiveObject('color', { _: 'aquamarine' }, systemTheme, 'colors')).toEqual({
      color: 'aquamarine'
    })
  })
})

describe('When passed an mutli-item object', () => {
  const foo = parseResponsiveObject('color', { _: 'red', sm: 'blue', md: 'green' }, systemTheme)

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
  const foo = parseResponsiveObject('color', { _: 'red', sm: 'blue', lg: 'green' }, systemTheme)

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
  const foo = parseResponsiveObject('color', { lg: 'blue', _: 'red', sm: 'green' }, systemTheme)

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
    expect(parseResponsiveObject('color', { _: 'red', sm: 'blue', md: 'green' }, systemTheme, 'colors')).toEqual({
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
    expect(parseResponsiveObject('color', { _: 'red', sm: 'blue', lg: 'green' }, systemTheme, 'colors')).toEqual({
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
    expect(parseResponsiveObject('color', { _: 'aquamarine', sm: 'blue', lg: 'green' }, systemTheme, 'colors')).toEqual({
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
    expect(parseResponsiveObject('padding', { _: '1', sm: '2', md: '3' }, systemTheme, 'spaces')).toEqual({
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
    expect(parseResponsiveObject('padding', { _: '1', sm: '2', lg: '3' }, systemTheme, 'spaces')).toEqual({
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
    expect(parseResponsiveObject('padding', { _: '48', sm: '5', lg: '6' }, systemTheme, 'spaces')).toEqual({
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

// describe('When using alternative breakpoints from a user-defined theme', () => {
//   const customTheme = {
//     ...systemTheme,
//     breakpoints: {
//       small: 540,
//       medium: 720,
//       large: 1080
//     }
//   }

//   it('should return an object', () => {
//     expect(typeof parseResponsiveObject('padding', { _: '48', small: '64', medium: '128' }, customTheme, 'spaces')).toBe('object')
//   })

//   it('should return a sorted style object, using the new breakpoints', () => {
//     expect(parseResponsiveObject('padding', { _: '48', small: '64', medium: '128' }, customTheme, 'spaces')).toEqual({
//       padding: '48px',
//       '@media screen and (min-width: 540px)': {
//         padding: '64px'
//       },
//       '@media screen and (min-width: 720px)': {
//         padding: '128px'
//       }
//     })
//   })

//   it('should still be able to skip breakpoint values that are not defined in the ResponsiveObject', () => {
//     expect(parseResponsiveObject('padding', { _: '48', small: '64', large: '128' }, customTheme, 'spaces')).toEqual({
//       padding: '48px',
//       '@media screen and (min-width: 540px)': {
//         padding: '64px'
//       },
//       '@media screen and (min-width: 1080px)': {
//         padding: '128px'
//       }
//     })
//   })

//   it("should still be able to sort a style object that's not referenced in size order", () => {
//     expect(parseResponsiveObject('padding', { small: '64', _: '48', large: '128' }, customTheme, 'spaces')).toEqual({
//       padding: '48px',
//       '@media screen and (min-width: 540px)': {
//         padding: '64px'
//       },
//       '@media screen and (min-width: 1080px)': {
//         padding: '128px'
//       }
//     })
//   })

//   it('should still be able to access object-based theme scales', () => {
//     expect(parseResponsiveObject('color', { _: 'red', small: 'blue', medium: 'green' }, customTheme, 'colors')).toEqual({
//       color: '#F2335D',
//       '@media screen and (min-width: 540px)': {
//         color: '#12A5EC'
//       },
//       '@media screen and (min-width: 720px)': {
//         color: '#7CD420'
//       }
//     })
//   })

//   it('should still be able return the originally passed style if it does not exist within the theme, when accessing object-based theme scales', () => {
//     expect(parseResponsiveObject('color', { _: 'aquamarine', small: 'blue', large: 'green' }, customTheme, 'colors')).toEqual({
//       color: 'aquamarine',
//       '@media screen and (min-width: 540px)': {
//         color: '#12A5EC'
//       },
//       '@media screen and (min-width: 1080px)': {
//         color: '#7CD420'
//       }
//     })
//   })

//   it('should still be able to access arrray-based theme scales', () => {
//     // CAVEAT: Array values can be selected by passing numbers here but they must be strings, e.g. '1' not 1
//     expect(parseResponsiveObject('padding', { _: '1', small: '2', medium: '3' }, customTheme, 'spaces')).toEqual({
//       padding: '4px',
//       '@media screen and (min-width: 540px)': {
//         padding: '8px'
//       },
//       '@media screen and (min-width: 720px)': {
//         padding: '16px'
//       }
//     })
//   })

//   it('should still be able return the originally passed style if it does not exist within the theme, when accessing array-based theme scales', () => {
//     expect(parseResponsiveObject('padding', { _: '48', small: '5', large: '6' }, customTheme, 'spaces')).toEqual({
//       padding: '48px',
//       '@media screen and (min-width: 540px)': {
//         padding: '64px'
//       },
//       '@media screen and (min-width: 1080px)': {
//         padding: '128px'
//       }
//     })
//   })
// })
