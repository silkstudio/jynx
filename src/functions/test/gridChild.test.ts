// Types
import type { ThemeProps } from '../../types/theme'

// Utils
import { gridChild, GridChildProps, gridChildConfig } from '../gridChild'
import { defaultBreakpoints } from '../../theme'

/*








*/

describe('When passing single style declarations', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: GridChildProps & ThemeProps<typeof theme> = {
    theme: theme,
    alignSelf: 'baseline'
  }

  const test = gridChild(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      alignSelf: 'baseline'
    })
  })
})

describe('When passing responsive style objects', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: GridChildProps & ThemeProps<typeof theme> = {
    theme,
    justifySelf: { _: 'flex-start', sm: 'space-around', md: 'stretch' }
  }

  const test = gridChild(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      justifySelf: 'flex-start',
      '@media screen and (min-width: 640px)': {
        justifySelf: 'space-around'
      },
      '@media screen and (min-width: 960px)': {
        justifySelf: 'stretch'
      }
    })
  })
})

describe('When passing responsive style arrays', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: GridChildProps & ThemeProps<typeof theme> = {
    theme: theme,
    gridColumn: ['1 / span 2', '2 / span 4', null, '4 / span 6']
  }

  const test = gridChild(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      gridColumn: '1 / span 2',
      '@media screen and (min-width: 640px)': {
        gridColumn: '2 / span 4'
      },
      '@media screen and (min-width: 1280px)': {
        gridColumn: '4 / span 6'
      }
    })
  })
})

describe('When passing multiple responsive styles', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: GridChildProps & ThemeProps<typeof theme> = {
    theme: theme,
    alignSelf: ['center', 'flex-end', null, 'stretch'],
    justifySelf: { _: 'space-around', sm: 'stretch', lg: 'center' }
  }

  const test = gridChild(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      alignSelf: 'center',
      justifySelf: 'space-around',
      '@media screen and (min-width: 640px)': {
        alignSelf: 'flex-end',
        justifySelf: 'stretch'
      },
      '@media screen and (min-width: 1280px)': {
        alignSelf: 'stretch',
        justifySelf: 'center'
      }
    })
  })
})

describe('When tring to access the functions config property', () => {
  it('should return an object', () => {
    expect(typeof gridChild.config).toBe('object')
  })

  it('should return the grid config object', () => {
    expect(gridChild.config).toMatchObject(gridChildConfig)
  })
})
