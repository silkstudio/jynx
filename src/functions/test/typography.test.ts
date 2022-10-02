// Types
import type { ThemeProps } from '../../types/theme'

// Utils
import { typography, TypographyProps, typographyConfig } from '../typography'
import { defaultBreakpoints } from '../../theme'

/*








*/

describe('When passing single style declarations', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: TypographyProps & ThemeProps<typeof theme> = {
    theme: theme,
    fontFamily: 'system-ui, sans-serif'
  }

  const test = typography(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      fontFamily: 'system-ui, sans-serif'
    })
  })
})

describe('When passing responsive style objects', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: TypographyProps & ThemeProps<typeof theme> = {
    theme,
    fontSize: { _: 5, sm: 10, lg: 15 }
  }

  const test = typography(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      fontSize: '5px',
      '@media screen and (min-width: 640px)': {
        fontSize: '10px'
      },
      '@media screen and (min-width: 1280px)': {
        fontSize: '15px'
      }
    })
  })
})

describe('When passing responsive style arrays', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: TypographyProps & ThemeProps<typeof theme> = {
    theme: theme,
    fontSize: [5, 10, null, 15]
  }

  const test = typography(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      fontSize: '5px',
      '@media screen and (min-width: 640px)': {
        fontSize: '10px'
      },
      '@media screen and (min-width: 1280px)': {
        fontSize: '15px'
      }
    })
  })
})

describe('When passing multiple responsive styles', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: TypographyProps & ThemeProps<typeof theme> = {
    theme: theme,
    fontStyle: ['italic', 'normal', null, 'inherit'],
    fontWeight: { _: 300, sm: 400, lg: 500 }
  }

  const test = typography(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      fontStyle: 'italic',
      fontWeight: '300',
      '@media screen and (min-width: 640px)': {
        fontStyle: 'normal',
        fontWeight: '400'
      },
      '@media screen and (min-width: 1280px)': {
        fontStyle: 'inherit',
        fontWeight: '500'
      }
    })
  })
})

describe('When passing styles containing theme values', () => {
  const theme = {
    breakpoints: defaultBreakpoints,
    fonts: {
      primary: 'system-ui, sans-serif',
      secondary: '"Times New Roman", Times, serif'
    }
  }

  const styles: TypographyProps & ThemeProps<typeof theme> = {
    theme,
    fontFamily: { _: 'primary', sm: 'secondary', lg: 'Arial, Helvetica, sans-serif' }
  }

  const test = typography(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      fontFamily: 'system-ui, sans-serif',
      '@media screen and (min-width: 640px)': {
        fontFamily: '"Times New Roman", Times, serif'
      },
      '@media screen and (min-width: 1280px)': {
        fontFamily: 'Arial, Helvetica, sans-serif'
      }
    })
  })
})

describe('When passing styles containing 0 index theme values', () => {
  const theme = {
    breakpoints: defaultBreakpoints,
    lineHeights: [1, 1.2, 1.5, 2]
  }

  const styles: TypographyProps & ThemeProps<typeof theme> = {
    theme,
    lineHeight: { _: '0' }
  }

  const test = typography(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      lineHeight: '1'
    })
  })
})

describe('When tring to access the functions config property', () => {
  it('should return an object', () => {
    expect(typeof typography.config).toBe('object')
  })

  it('should return the typography config object', () => {
    expect(typography.config).toMatchObject(typographyConfig)
  })
})
