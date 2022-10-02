// Types
import type { ThemeProps } from '../../types/theme'

// Utils
import { space, SpaceProps, spaceConfig } from '../space'
import { defaultBreakpoints } from '../../theme'

/*








*/

describe('When passing single style declarations', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: SpaceProps & ThemeProps<typeof theme> = {
    theme: theme,
    margin: 10
  }

  const test = space(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      margin: '10px'
    })
  })
})

describe('When passing responsive style objects', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: SpaceProps & ThemeProps<typeof theme> = {
    theme,
    margin: { _: 5, sm: 10, md: 15 }
  }

  const test = space(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      margin: '5px',
      '@media screen and (min-width: 640px)': {
        margin: '10px'
      },
      '@media screen and (min-width: 960px)': {
        margin: '15px'
      }
    })
  })
})

describe('When passing responsive style arrays', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: SpaceProps & ThemeProps<typeof theme> = {
    theme: theme,
    margin: [5, 10, null, 15]
  }

  const test = space(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      margin: '5px',
      '@media screen and (min-width: 640px)': {
        margin: '10px'
      },
      '@media screen and (min-width: 1280px)': {
        margin: '15px'
      }
    })
  })
})

describe('When passing multiple responsive styles', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: SpaceProps & ThemeProps<typeof theme> = {
    theme: theme,
    margin: [5, 10, null, 15],
    padding: { _: 8, sm: 16, lg: 24 }
  }

  const test = space(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      margin: '5px',
      padding: '8px',
      '@media screen and (min-width: 640px)': {
        margin: '10px',
        padding: '16px'
      },
      '@media screen and (min-width: 1280px)': {
        margin: '15px',
        padding: '24px'
      }
    })
  })
})

describe('When passing styles containing theme values', () => {
  const theme = {
    breakpoints: defaultBreakpoints,
    space: [2, 4, 8, 16, 24, 32]
  }

  const styles: SpaceProps & ThemeProps<typeof theme> = {
    theme,
    margin: { _: 1, sm: 2, lg: 24 }
  }

  const test = space(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      margin: '4px',
      '@media screen and (min-width: 640px)': {
        margin: '8px'
      },
      '@media screen and (min-width: 1280px)': {
        margin: '24px'
      }
    })
  })
})

describe('When passing styles containing 0 index theme values', () => {
  const theme = {
    breakpoints: defaultBreakpoints,
    space: [2, 4, 8, 16, 24, 32]
  }

  const styles: SpaceProps & ThemeProps<typeof theme> = {
    theme,
    paddingTop: { _: '0' }
  }

  const test = space(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      paddingTop: '2px'
    })
  })
})

describe('When tring to access the functions config property', () => {
  it('should return an object', () => {
    expect(typeof space.config).toBe('object')
  })

  it('should return the space config object', () => {
    expect(space.config).toMatchObject(spaceConfig)
  })
})
