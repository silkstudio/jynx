// Types
import type { ThemeProps } from '../../types/theme'

// Utils
import { shadow, ShadowProps, shadowConfig } from '../shadow'
import { defaultBreakpoints } from '../../theme'

/*








*/

describe('When passing single style declarations', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: ShadowProps & ThemeProps<typeof theme> = {
    theme: theme,
    boxShadow: '10px 10px 5px #aaaaaa'
  }

  const test = shadow(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      boxShadow: '10px 10px 5px #aaaaaa'
    })
  })
})

describe('When passing responsive style objects', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: ShadowProps & ThemeProps<typeof theme> = {
    theme,
    boxShadow: { _: '5px 5px blue', sm: '10px 10px red', md: '15px 15px green' }
  }

  const test = shadow(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      boxShadow: '5px 5px blue',
      '@media screen and (min-width: 640px)': {
        boxShadow: '10px 10px red'
      },
      '@media screen and (min-width: 960px)': {
        boxShadow: '15px 15px green'
      }
    })
  })
})

describe('When passing responsive style arrays', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: ShadowProps & ThemeProps<typeof theme> = {
    theme: theme,
    boxShadow: ['5px 5px blue', '10px 10px red', null, '15px 15px green']
  }

  const test = shadow(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      boxShadow: '5px 5px blue',
      '@media screen and (min-width: 640px)': {
        boxShadow: '10px 10px red'
      },
      '@media screen and (min-width: 1280px)': {
        boxShadow: '15px 15px green'
      }
    })
  })
})

describe('When passing multiple responsive styles', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: ShadowProps & ThemeProps<typeof theme> = {
    theme: theme,
    boxShadow: ['5px 5px blue', '10px 10px red', null, '15px 15px green'],
    textShadow: { _: '2px 2px orange', sm: '4px 4px purple', lg: '8px 8px yellow' }
  }

  const test = shadow(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      boxShadow: '5px 5px blue',
      textShadow: '2px 2px orange',
      '@media screen and (min-width: 640px)': {
        boxShadow: '10px 10px red',
        textShadow: '4px 4px purple'
      },
      '@media screen and (min-width: 1280px)': {
        boxShadow: '15px 15px green',
        textShadow: '8px 8px yellow'
      }
    })
  })
})

describe('When passing styles containing theme values', () => {
  const theme = {
    breakpoints: defaultBreakpoints,
    shadows: {
      small: '5px 5px #aaaaaa',
      medium: '10px 10px #aaaaaa',
      large: '15px 15px #aaaaaa'
    }
  }

  const styles: ShadowProps & ThemeProps<typeof theme> = {
    theme,
    boxShadow: { _: 'small', sm: 'medium', lg: '20px 20px #aaaaaa' }
  }

  const test = shadow(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      boxShadow: '5px 5px #aaaaaa',
      '@media screen and (min-width: 640px)': {
        boxShadow: '10px 10px #aaaaaa'
      },
      '@media screen and (min-width: 1280px)': {
        boxShadow: '20px 20px #aaaaaa'
      }
    })
  })
})

describe('When passing styles containing 0 index theme values', () => {
  const theme = {
    breakpoints: defaultBreakpoints,
    shadows: ['5px 5px #aaaaaa', '10px 10px #aaaaaa']
  }

  const styles: ShadowProps & ThemeProps<typeof theme> = {
    theme,
    boxShadow: { _: '0' }
  }

  const test = shadow(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      boxShadow: '5px 5px #aaaaaa'
    })
  })
})

describe('When tring to access the functions config property', () => {
  it('should return an object', () => {
    expect(typeof shadow.config).toBe('object')
  })

  it('should return the shadow config object', () => {
    expect(shadow.config).toMatchObject(shadowConfig)
  })
})
