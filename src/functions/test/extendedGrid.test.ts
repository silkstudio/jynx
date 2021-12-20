// Types
import type { ThemeProps } from '../../types/theme'

// Utils
import { extendedGrid, ExtendedGridProps, extendedGridConfig } from '../extendedGrid'
import { defaultBreakpoints } from '../../utils'

/*








*/

describe('When passing single style declarations, with shorthand props', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: ExtendedGridProps & ThemeProps<typeof theme> = {
    theme: theme,
    alignItems: 'flex-start'
  }

  const test = extendedGrid(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      alignItems: 'flex-start'
    })
  })
})

describe('When passing responsive style objects, with shorthand props', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: ExtendedGridProps & ThemeProps<typeof theme> = {
    theme,
    justifyContent: { _: 'flex-start', sm: 'space-around', md: 'stretch' }
  }

  const test = extendedGrid(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
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

  const styles: ExtendedGridProps & ThemeProps<typeof theme> = {
    theme: theme,
    alignItems: ['flex-start', 'stretch', null, 'center']
  }

  const test = extendedGrid(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
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

  const styles: ExtendedGridProps & ThemeProps<typeof theme> = {
    theme: theme,
    alignItems: ['center', 'flex-end', null, 'stretch'],
    justifyContent: { _: 'space-around', sm: 'stretch', lg: 'center' }
  }

  const test = extendedGrid(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
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
    expect(typeof extendedGrid.config).toBe('object')
  })

  it('should return the extendedGrid config object', () => {
    expect(extendedGrid.config).toMatchObject(extendedGridConfig)
  })
})
