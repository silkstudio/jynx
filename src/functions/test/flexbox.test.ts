// Types
import type { ThemeProps } from '../../types/theme'

// Utils
import { flexbox, FlexboxProps, flexboxConfig } from '../flexbox'
import { defaultBreakpoints } from '../../utils'

/*








*/

describe('When passing single style declarations', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: FlexboxProps & ThemeProps<typeof theme> = {
    theme: theme,
    alignItems: 'flex-start'
  }

  const test = flexbox(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      display: 'flex',
      alignItems: 'flex-start'
    })
  })
})

describe('When passing responsive style objects', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: FlexboxProps & ThemeProps<typeof theme> = {
    theme,
    justifyContent: { _: 'flex-start', sm: 'space-around', md: 'stretch' }
  }

  const test = flexbox(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      display: 'flex',
      justifyContent: 'flex-start',
      '@media screen and (min-width: 640px)': {
        justifyContent: 'space-around'
      },
      '@media screen and (min-width: 960px)': {
        justifyContent: 'stretch'
      }
    })
  })
})

describe('When passing responsive style arrays', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: FlexboxProps & ThemeProps<typeof theme> = {
    theme: theme,
    alignItems: ['flex-start', 'stretch', null, 'center']
  }

  const test = flexbox(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      display: 'flex',
      alignItems: 'flex-start',
      '@media screen and (min-width: 640px)': {
        alignItems: 'stretch'
      },
      '@media screen and (min-width: 1280px)': {
        alignItems: 'center'
      }
    })
  })
})

describe('When passing multiple responsive styles', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: FlexboxProps & ThemeProps<typeof theme> = {
    theme: theme,
    alignItems: ['center', 'flex-end', null, 'stretch'],
    justifyContent: { _: 'space-around', sm: 'stretch', lg: 'center' }
  }

  const test = flexbox(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      '@media screen and (min-width: 640px)': {
        alignItems: 'flex-end',
        justifyContent: 'stretch'
      },
      '@media screen and (min-width: 1280px)': {
        alignItems: 'stretch',
        justifyContent: 'center'
      }
    })
  })
})

describe('When no styles are passed', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: FlexboxProps & ThemeProps<typeof theme> = {
    theme: theme
  }

  const test = flexbox(styles)

  it('should not have display: flex as a default', () => {
    expect(test).toEqual({})
  })
})

describe('When tring to access the functions config property', () => {
  it('should return an object', () => {
    expect(typeof flexbox.config).toBe('object')
  })

  it('should return the flexbox config object', () => {
    expect(flexbox.config).toMatchObject(flexboxConfig)
  })
})
