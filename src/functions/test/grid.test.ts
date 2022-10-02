// Types
import type { ThemeProps } from '../../types/theme'

// Utils
import { grid, GridProps, gridConfig } from '../grid'
import { defaultBreakpoints } from '../../theme'

/*








*/

describe('When passing single style declarations', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: GridProps & ThemeProps<typeof theme> = {
    theme: theme,
    gridAlignItems: 'flex-start'
  }

  const test = grid(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      alignItems: 'flex-start'
    })
  })
})

describe('When passing responsive style objects', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: GridProps & ThemeProps<typeof theme> = {
    theme,
    gridJustifyContent: { _: 'flex-start', sm: 'space-around', md: 'stretch' }
  }

  const test = grid(styles)

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

describe('When passing responsive style arrays', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: GridProps & ThemeProps<typeof theme> = {
    theme: theme,
    gridAlignItems: ['flex-start', 'stretch', null, 'center']
  }

  const test = grid(styles)

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

describe('When passing multiple responsive styles', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: GridProps & ThemeProps<typeof theme> = {
    theme: theme,
    gridAlignItems: ['center', 'flex-end', null, 'stretch'],
    gridJustifyContent: { _: 'space-around', sm: 'stretch', lg: 'center' }
  }

  const test = grid(styles)

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
    expect(typeof grid.config).toBe('object')
  })

  it('should return the grid config object', () => {
    expect(grid.config).toMatchObject(gridConfig)
  })
})
