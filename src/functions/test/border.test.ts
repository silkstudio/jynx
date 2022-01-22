// Types
import type { ThemeProps } from '../../types/theme'

// Utils
import { border, BorderProps, borderConfig } from '../border'
import { defaultBreakpoints } from '../../utils'

/*








*/

describe('When passing single style declarations', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: BorderProps & ThemeProps<typeof theme> = {
    theme: theme,
    borderColor: 'red'
  }

  const test = border(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      borderColor: 'red'
    })
  })
})

describe('When passing responsive style objects', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: BorderProps & ThemeProps<typeof theme> = {
    theme,
    borderColor: { _: 'gold', sm: 'aquamarine', md: 'maroon' }
  }

  const test = border(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      borderColor: 'gold',
      '@media screen and (min-width: 640px)': {
        borderColor: 'aquamarine'
      },
      '@media screen and (min-width: 960px)': {
        borderColor: 'maroon'
      }
    })
  })
})

describe('When passing responsive style arrays', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: BorderProps & ThemeProps<typeof theme> = {
    theme: theme,
    borderColor: ['gold', 'aquamarine', null, 'maroon']
  }

  const test = border(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      borderColor: 'gold',
      '@media screen and (min-width: 640px)': {
        borderColor: 'aquamarine'
      },
      '@media screen and (min-width: 1280px)': {
        borderColor: 'maroon'
      }
    })
  })
})

describe('When passing multiple responsive styles', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: BorderProps & ThemeProps<typeof theme> = {
    theme: theme,
    borderColor: ['gold', 'aquamarine', null, 'maroon'],
    borderRadius: { _: 2, sm: 4, lg: 8 }
  }

  const test = border(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      borderColor: 'gold',
      borderRadius: '2px',
      '@media screen and (min-width: 640px)': {
        borderColor: 'aquamarine',
        borderRadius: '4px'
      },
      '@media screen and (min-width: 1280px)': {
        borderColor: 'maroon',
        borderRadius: '8px'
      }
    })
  })
})

describe('When passing styles containing theme values', () => {
  const theme = {
    breakpoints: defaultBreakpoints,
    colors: {
      red: '#F2335D',
      yellow: '#FFCC00'
    }
  }

  const styles: BorderProps & ThemeProps<typeof theme> = {
    theme,
    borderColor: { _: 'red', sm: 'yellow', lg: 'maroon' }
  }

  const test = border(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      borderColor: '#F2335D',
      '@media screen and (min-width: 640px)': {
        borderColor: '#FFCC00'
      },
      '@media screen and (min-width: 1280px)': {
        borderColor: 'maroon'
      }
    })
  })
})

describe('When passing styles containing 0 index theme values', () => {
  const theme = {
    breakpoints: defaultBreakpoints,
    borderStyles: ['solid', 'dashed']
  }

  const styles: BorderProps & ThemeProps<typeof theme> = {
    theme,
    borderStyle: { _: '0' }
    // ^^ CAVEAT: Unable to pass number here to index array... must be string of number (i.e. '1' not 1)
  }

  const test = border(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(border(styles)).toEqual({
      borderStyle: 'solid'
    })
  })
})

describe('When using border radius props without a theme', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  it('should be able to parse positive numbers and return px values', () => {
    const styles: BorderProps & ThemeProps<typeof theme> = {
      theme,
      borderTopLeftRadius: 4
    }

    expect(border(styles)).toEqual({
      borderTopLeftRadius: '4px'
    })
  })

  it('should be able to parse negative numbers and return px values', () => {
    const styles: BorderProps & ThemeProps<typeof theme> = {
      theme,
      borderTopLeftRadius: -6
    }

    expect(border(styles)).toEqual({
      borderTopLeftRadius: '-6px'
    })
  })
})

describe('When using border radius props with a theme', () => {
  const theme = {
    breakpoints: defaultBreakpoints,
    radii: [2, 4, 6, 8]
  }

  it('should be able to parse positive numbers and return px values', () => {
    const styles: BorderProps & ThemeProps<typeof theme> = {
      theme,
      borderTopLeftRadius: 1
    }

    expect(border(styles)).toEqual({
      borderTopLeftRadius: '4px'
    })
  })

  it('should be able to parse negative numbers and return px values', () => {
    const styles: BorderProps & ThemeProps<typeof theme> = {
      theme,
      borderTopLeftRadius: -2
    }

    expect(border(styles)).toEqual({
      borderTopLeftRadius: '-6px'
    })
  })
})

describe('When tring to access the functions config property', () => {
  it('should return an object', () => {
    expect(typeof border.config).toBe('object')
  })

  it('should return the border config object', () => {
    expect(border.config).toMatchObject(borderConfig)
  })
})
