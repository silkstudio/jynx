// Types
import type { ThemeProps } from '../../types/theme'

// Utils
import { background, BackgroundProps, backgroundConfig } from '../background'
import { defaultBreakpoints } from '../../utils'

/*








*/

describe('When passing single style declarations', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: BackgroundProps & ThemeProps<typeof theme> = {
    theme: theme,
    backgroundColor: 'red'
  }

  const test = background(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      backgroundColor: 'red'
    })
  })
})

describe('When passing responsive style objects', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: BackgroundProps & ThemeProps<typeof theme> = {
    theme,
    backgroundColor: { _: 'gold', sm: 'aquamarine', md: 'maroon' }
  }

  const test = background(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      backgroundColor: 'gold',
      '@media screen and (min-width: 640px)': {
        backgroundColor: 'aquamarine'
      },
      '@media screen and (min-width: 960px)': {
        backgroundColor: 'maroon'
      }
    })
  })
})

describe('When passing responsive style arrays', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: BackgroundProps & ThemeProps<typeof theme> = {
    theme: theme,
    backgroundColor: ['gold', 'aquamarine', null, 'maroon']
  }

  const test = background(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      backgroundColor: 'gold',
      '@media screen and (min-width: 640px)': {
        backgroundColor: 'aquamarine'
      },
      '@media screen and (min-width: 1280px)': {
        backgroundColor: 'maroon'
      }
    })
  })
})

describe('When passing multiple responsive styles', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: BackgroundProps & ThemeProps<typeof theme> = {
    theme: theme,
    backgroundColor: ['gold', 'aquamarine', null, 'maroon'],
    backgroundRepeat: { _: 'space', sm: 'round', lg: 'repeat-x' }
  }

  const test = background(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      backgroundColor: 'gold',
      backgroundRepeat: 'space',
      '@media screen and (min-width: 640px)': {
        backgroundColor: 'aquamarine',
        backgroundRepeat: 'round'
      },
      '@media screen and (min-width: 1280px)': {
        backgroundColor: 'maroon',
        backgroundRepeat: 'repeat-x'
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

  const styles: BackgroundProps & ThemeProps<typeof theme> = {
    theme,
    backgroundColor: { _: 'red', sm: 'yellow', lg: 'maroon' }
  }

  const test = background(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      backgroundColor: '#F2335D',
      '@media screen and (min-width: 640px)': {
        backgroundColor: '#FFCC00'
      },
      '@media screen and (min-width: 1280px)': {
        backgroundColor: 'maroon'
      }
    })
  })
})

describe('When passing styles containing 0 index theme values', () => {
  const theme = {
    breakpoints: defaultBreakpoints,
    colors: ['#F2335D', '#FFCC00']
  }

  const styles: BackgroundProps & ThemeProps<typeof theme> = {
    theme,
    backgroundColor: { _: '0' }
  }

  const test = background(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(background(styles)).toEqual({
      backgroundColor: '#F2335D'
    })
  })
})

describe('When tring to access the functions config property', () => {
  it('should return an object', () => {
    expect(typeof background.config).toBe('object')
  })

  it('should return the background config object', () => {
    expect(background.config).toMatchObject(backgroundConfig)
  })
})
