// Types
import type { ThemeProps } from '../../types/theme'

// Utils
import { extendedFlexbox, ExtendedFlexboxProps, extendedFlexboxConfig } from '../extendedFlexbox'
import { defaultBreakpoints } from '../../theme'

/*








*/

describe('When passing single style declarations, with shorthand props', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: ExtendedFlexboxProps & ThemeProps<typeof theme> = {
    theme: theme,
    align: 'flex-start'
  }

  const test = extendedFlexbox(styles)

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

describe('When passing responsive style objects, with shorthand props', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: ExtendedFlexboxProps & ThemeProps<typeof theme> = {
    theme,
    justify: { _: 'flex-start', sm: 'space-around', md: 'stretch' }
  }

  const test = extendedFlexbox(styles)

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

describe('When passing responsive style arrays, with shorthand props', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: ExtendedFlexboxProps & ThemeProps<typeof theme> = {
    theme: theme,
    align: ['flex-start', 'stretch', null, 'center']
  }

  const test = extendedFlexbox(styles)

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

describe('When passing multiple responsive styles, with shorthand props', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: ExtendedFlexboxProps & ThemeProps<typeof theme> = {
    theme: theme,
    align: ['center', 'flex-end', null, 'stretch'],
    justify: { _: 'space-around', sm: 'stretch', lg: 'center' }
  }

  const test = extendedFlexbox(styles)

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

describe('When tring to access the functions config property', () => {
  it('should return an object', () => {
    expect(typeof extendedFlexbox.config).toBe('object')
  })

  it('should return the extendedFlexbox config object', () => {
    expect(extendedFlexbox.config).toMatchObject(extendedFlexboxConfig)
  })
})
