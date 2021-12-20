// Types
import type { ThemeProps } from '../../types/theme'

// Utils
import { color, ColorProps, colorConfig } from '../color'
import { defaultBreakpoints } from '../../utils'

/*








*/

describe('When passing single style declarations', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: ColorProps & ThemeProps<typeof theme> = {
    theme: theme,
    color: 'gold',
    bgColor: 'tomato'
  }

  const test = color(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      color: 'gold',
      backgroundColor: 'tomato'
    })
  })
})

describe('When passing responsive style objects', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: ColorProps & ThemeProps<typeof theme> = {
    theme,
    color: { _: 'gold', sm: 'aquamarine', md: 'maroon' }
  }

  const test = color(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      color: 'gold',
      '@media screen and (min-width: 640px)': {
        color: 'aquamarine'
      },
      '@media screen and (min-width: 960px)': {
        color: 'maroon'
      }
    })
  })
})

describe('When passing responsive style arrays', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: ColorProps & ThemeProps<typeof theme> = {
    theme: theme,
    backgroundColor: ['gold', 'aquamarine', null, 'maroon']
  }

  const test = color(styles)

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

  const styles: ColorProps & ThemeProps<typeof theme> = {
    theme: theme,
    backgroundColor: ['gold', 'aquamarine', null, 'maroon'],
    color: { _: 'gold', sm: 'aquamarine', lg: 'maroon' }
  }

  const test = color(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      backgroundColor: 'gold',
      color: 'gold',
      '@media screen and (min-width: 640px)': {
        backgroundColor: 'aquamarine',
        color: 'aquamarine'
      },
      '@media screen and (min-width: 1280px)': {
        backgroundColor: 'maroon',
        color: 'maroon'
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

  const styles: ColorProps & ThemeProps<typeof theme> = {
    theme,
    color: { _: 'red', sm: 'yellow', lg: 'maroon' }
  }

  const test = color(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      color: '#F2335D',
      '@media screen and (min-width: 640px)': {
        color: '#FFCC00'
      },
      '@media screen and (min-width: 1280px)': {
        color: 'maroon'
      }
    })
  })
})

describe('When passing styles containing 0 index theme values', () => {
  const theme = {
    breakpoints: defaultBreakpoints,
    colors: ['#F2335D', '#FFCC00']
  }

  const styles: ColorProps & ThemeProps<typeof theme> = {
    theme,
    color: { _: '0' }
  }

  const test = color(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(color(styles)).toEqual({
      color: '#F2335D'
    })
  })
})

describe('When tring to access the functions config property', () => {
  it('should return an object', () => {
    expect(typeof color.config).toBe('object')
  })

  it('should return the color config object', () => {
    expect(color.config).toMatchObject(colorConfig)
  })
})
