// Types
import type { CSSProperties } from '../../types/css'

// Utils
import { parser } from '../parser'
import { systemTheme } from '../../theme'

/*








*/

describe('When a required argument is missing', () => {
  it('should return an empty object if a css property is not defined', () => {
    const maybeCssProperty = undefined as unknown as keyof CSSProperties
    const foo = parser({ property: maybeCssProperty, values: ['red'], theme: systemTheme })

    expect(typeof foo).toBe('object')
    expect(foo).toEqual({})
  })

  it('should return an empty object if a style object is not defined', () => {
    const maybeArray = undefined as unknown as ['red']
    const foo = parser({ property: 'color', values: maybeArray, theme: systemTheme })

    expect(typeof foo).toBe('object')
    expect(foo).toEqual({})
  })

  it('should return an empty object if a theme is not defined', () => {
    const maybeTheme = undefined as unknown as typeof systemTheme
    const foo = parser({ property: 'color', values: ['red'], theme: maybeTheme })

    expect(typeof foo).toBe('object')
    expect(foo).toEqual({})
  })
})

describe('When passed a single item array', () => {
  const foo = parser({ property: 'color', values: ['red'], theme: systemTheme })

  it('should return an object ', () => {
    expect(typeof foo).toBe('object')
  })

  it('should return an object with a single key/value pair of color: red', () => {
    expect(foo).toEqual({
      color: 'red'
    })
  })
})

describe('When passed a single item object', () => {
  const foo = parser({ property: 'color', values: { _: 'red' }, theme: systemTheme })

  it('should return an object ', () => {
    expect(typeof foo).toBe('object')
  })

  it('should return an object with a single key/value pair', () => {
    expect(foo).toEqual({
      color: 'red'
    })
  })

  it('should reference the theme if a scale is provided and the value given corresponds to one in the theme', () => {
    expect(parser({ property: 'color', values: { _: 'red' }, theme: systemTheme, scale: 'colors' })).toEqual({
      color: '#F2335D'
    })
  })

  it('should use the original key as a fallback if value given does not correspond to one in the theme', () => {
    expect(parser({ property: 'color', values: { _: 'aquamarine' }, theme: systemTheme, scale: 'colors' })).toEqual({
      color: 'aquamarine'
    })
  })
})

describe('When passed an mutli-item array', () => {
  const foo = parser({ property: 'color', values: ['red', 'blue', 'green'], theme: systemTheme })

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

describe('When passed an mutli-item object', () => {
  const foo = parser({ property: 'color', values: { _: 'red', sm: 'blue', md: 'green' }, theme: systemTheme })

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
  const foo = parser({ property: 'color', values: ['red', 'blue', null, 'yellow'], theme: systemTheme })

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

describe('When passed an mutli-item object where only select breakpoints are referenced', () => {
  const foo = parser({ property: 'color', values: { _: 'red', sm: 'blue', lg: 'green' }, theme: systemTheme })

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

describe('When a responsive array and an object-based theme scale are passed', () => {
  it('should return a sorted style object, referencing correlating theme values if they exist', () => {
    expect(parser({ property: 'color', values: ['red', 'blue', 'yellow'], theme: systemTheme, scale: 'colors' })).toEqual({
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
    expect(parser({ property: 'color', values: ['red', 'blue', null, 'yellow'], theme: systemTheme, scale: 'colors' })).toEqual({
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
    expect(parser({ property: 'color', values: ['aquamarine', 'blue', null, 'yellow'], theme: systemTheme, scale: 'colors' })).toEqual(
      {
        color: 'aquamarine',
        '@media screen and (min-width: 640px)': {
          color: '#12A5EC'
        },
        '@media screen and (min-width: 1280px)': {
          color: '#FFCC00'
        }
      }
    )
  })
})

describe('When a responsive object and an object-based theme scale are passed', () => {
  it('should return a sorted style object, referencing correlating theme values if they exist', () => {
    expect(parser({ property: 'color', values: { _: 'red', sm: 'blue', md: 'green' }, theme: systemTheme, scale: 'colors' })).toEqual({
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
    expect(parser({ property: 'color', values: { _: 'red', sm: 'blue', lg: 'green' }, theme: systemTheme, scale: 'colors' })).toEqual({
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
    expect(
      parser({ property: 'color', values: { _: 'aquamarine', sm: 'blue', lg: 'green' }, theme: systemTheme, scale: 'colors' })
    ).toEqual({
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

describe('When a responsive array and an array-based theme scale are passed', () => {
  it('should return a sorted style object, referencing correlating theme values if they exist', () => {
    // CAVEAT: Array values can be selected by passing numbers here but they must be strings, e.g. '1' not 1
    expect(parser({ property: 'padding', values: ['1', '2', '3'], theme: systemTheme, scale: 'spaces' })).toEqual({
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
    expect(parser({ property: 'padding', values: ['1', '2', null, '3'], theme: systemTheme, scale: 'spaces' })).toEqual({
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
    expect(parser({ property: 'padding', values: ['48', '5', null, '6'], theme: systemTheme, scale: 'spaces' })).toEqual({
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

describe('When a responsive object and an array-based theme scale are passed', () => {
  it('should return a sorted style object, referencing correlating theme values if they exist', () => {
    // CAVEAT: Array values can be selected by passing numbers here but they must be strings, e.g. '1' not 1
    expect(parser({ property: 'padding', values: { _: '1', sm: '2', md: '3' }, theme: systemTheme, scale: 'spaces' })).toEqual({
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
    expect(parser({ property: 'padding', values: { _: '1', sm: '2', lg: '3' }, theme: systemTheme, scale: 'spaces' })).toEqual({
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
    expect(parser({ property: 'padding', values: { _: '48', sm: '5', lg: '6' }, theme: systemTheme, scale: 'spaces' })).toEqual({
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

// describe('When passing a responsive array and using an alternative breakpoints from a user-defined theme', () => {
//   const customTheme = {
//     ...systemTheme,
//     breakpoints: {
//       mobile: 540,
//       medium: 720,
//       large: 1080
//     }
//   }

//   it('should return an object', () => {
//     expect(typeof parser({ property: 'padding', values: ['48', '64', '128'], theme: customTheme, scale: 'spaces' })).toBe('object')
//   })

//   it('should return a sorted style object, using the new breakpoints', () => {
//     expect(parser({ property: 'padding', values: ['48', '64', '128'], theme: customTheme, scale: 'spaces' })).toEqual({
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
//     expect(parser({ property: 'padding', values: ['48', '64', null, '128'], theme: customTheme, scale: 'spaces' })).toEqual({
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
//     expect(parser({ property: 'color', values: ['red', 'blue', 'green'], theme: customTheme, scale: 'colors' })).toEqual({
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
//     expect(parser({ property: 'color', values: ['aquamarine', 'blue', null, 'green'], theme: customTheme, scale: 'colors' })).toEqual({
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
//     expect(parser({ property: 'padding', values: ['1', '2', '3'], theme: customTheme, scale: 'spaces' })).toEqual({
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
//     expect(parser({ property: 'padding', values: ['48', '5', null, '6'], theme: customTheme, scale: 'spaces' })).toEqual({
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

// describe('When passing a responsive object and using an alternative breakpoints from a user-defined theme', () => {
//   const customTheme = {
//     ...systemTheme,
//     breakpoints: {
//       mobile: 540,
//       tablet: 720,
//       desktop: 1080
//     }
//   }

//   it('should return an object', () => {
//     expect(
//       typeof parser({ property: 'padding', values: { _: '48', mobile: '64', medium: '128' }, theme: customTheme, scale: 'spaces' })
//     ).toBe('object')
//   })

//   it('should return a sorted style object, using the new breakpoints', () => {
//     expect(
//       parser({ property: 'padding', values: { _: '48', mobile: '64', medium: '128' }, theme: customTheme, scale: 'spaces' })
//     ).toEqual({
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
//     expect(
//       parser({ property: 'padding', values: { _: '48', mobile: '64', large: '128' }, theme: customTheme, scale: 'spaces' })
//     ).toEqual({
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
//     expect(
//       parser({ property: 'padding', values: { mobile: '64', _: '48', large: '128' }, theme: customTheme, scale: 'spaces' })
//     ).toEqual({
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
//     expect(
//       parser({ property: 'color', values: { _: 'red', mobile: 'blue', medium: 'green' }, theme: customTheme, scale: 'colors' })
//     ).toEqual({
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
//     expect(
//       parser({ property: 'color', values: { _: 'aquamarine', mobile: 'blue', large: 'green' }, theme: customTheme, scale: 'colors' })
//     ).toEqual({
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
//     expect(parser({ property: 'padding', values: { _: '1', mobile: '2', medium: '3' }, theme: customTheme, scale: 'spaces' })).toEqual(
//       {
//         padding: '4px',
//         '@media screen and (min-width: 540px)': {
//           padding: '8px'
//         },
//         '@media screen and (min-width: 720px)': {
//           padding: '16px'
//         }
//       }
//     )
//   })

//   it('should still be able return the originally passed style if it does not exist within the theme, when accessing array-based theme scales', () => {
//     expect(parser({ property: 'padding', values: { _: '48', mobile: '5', large: '6' }, theme: customTheme, scale: 'spaces' })).toEqual(
//       {
//         padding: '48px',
//         '@media screen and (min-width: 540px)': {
//           padding: '64px'
//         },
//         '@media screen and (min-width: 1080px)': {
//           padding: '128px'
//         }
//       }
//     )
//   })
// })
