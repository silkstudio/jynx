// Types
import type { ThemeProps } from '../../types/theme'

// Utils
import { position, PositionProps, positionConfig } from '../position'
import { defaultBreakpoints } from '../../theme'

/*








*/

describe('When passing single style declarations', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: PositionProps & ThemeProps<typeof theme> = {
    theme: theme,
    top: 300
  }

  const test = position(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      top: '300px'
    })
  })
})

describe('When passing responsive style objects', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: PositionProps & ThemeProps<typeof theme> = {
    theme,
    position: { _: 'absolute', sm: 'fixed', md: 'relative' }
  }

  const test = position(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      position: 'absolute',
      '@media screen and (min-width: 640px)': {
        position: 'fixed'
      },
      '@media screen and (min-width: 960px)': {
        position: 'relative'
      }
    })
  })
})

describe('When passing responsive style arrays', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: PositionProps & ThemeProps<typeof theme> = {
    theme: theme,
    left: [360, 400, null, 720]
  }

  const test = position(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      left: '360px',
      '@media screen and (min-width: 640px)': {
        left: '400px'
      },
      '@media screen and (min-width: 1280px)': {
        left: '720px'
      }
    })
  })
})

describe('When passing multiple responsive styles', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: PositionProps & ThemeProps<typeof theme> = {
    theme: theme,
    left: [360, 400, null, 720],
    position: { _: 'absolute', sm: 'fixed', lg: 'relative' }
  }

  const test = position(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      left: '360px',
      position: 'absolute',
      '@media screen and (min-width: 640px)': {
        left: '400px',
        position: 'fixed'
      },
      '@media screen and (min-width: 1280px)': {
        left: '720px',
        position: 'relative'
      }
    })
  })
})

describe('When tring to access the functions config property', () => {
  it('should return an object', () => {
    expect(typeof position.config).toBe('object')
  })

  it('should return the position config object', () => {
    expect(position.config).toMatchObject(positionConfig)
  })
})
