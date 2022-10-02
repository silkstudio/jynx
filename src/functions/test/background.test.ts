// Types
import type { ThemeProps } from '../../types/theme'

// Utils
import { background, BackgroundProps, backgroundConfig } from '../background'
import { defaultBreakpoints } from '../../theme'

/*








*/

describe('When passing single style declarations', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: BackgroundProps & ThemeProps<typeof theme> = {
    theme,
    background: 'red'
  }

  const test = background(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      background: 'red'
    })
  })
})

describe('When passing responsive style objects', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: BackgroundProps & ThemeProps<typeof theme> = {
    theme,
    background: { _: 'gold', sm: 'aquamarine', md: 'maroon' }
  }

  const test = background(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      background: 'gold',
      '@media screen and (min-width: 640px)': {
        background: 'aquamarine'
      },
      '@media screen and (min-width: 960px)': {
        background: 'maroon'
      }
    })
  })
})

describe('When passing responsive style arrays', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: BackgroundProps & ThemeProps<typeof theme> = {
    theme,
    background: ['gold', 'aquamarine', null, 'maroon']
  }

  const test = background(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      background: 'gold',
      '@media screen and (min-width: 640px)': {
        background: 'aquamarine'
      },
      '@media screen and (min-width: 1280px)': {
        background: 'maroon'
      }
    })
  })
})

describe('When passing multiple responsive styles', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: BackgroundProps & ThemeProps<typeof theme> = {
    theme,
    background: ['gold', 'aquamarine', null, 'maroon'],
    backgroundRepeat: { _: 'space', sm: 'round', lg: 'repeat-x' }
  }

  const test = background(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      background: 'gold',
      backgroundRepeat: 'space',
      '@media screen and (min-width: 640px)': {
        background: 'aquamarine',
        backgroundRepeat: 'round'
      },
      '@media screen and (min-width: 1280px)': {
        background: 'maroon',
        backgroundRepeat: 'repeat-x'
      }
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
