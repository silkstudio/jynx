// Types
import type { ThemeProps } from '../../types/theme'

// Utils
import { layout, LayoutProps, layoutConfig } from '../layout'
import { defaultBreakpoints } from '../../utils'

/*








*/

describe('When passing single style declarations', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: LayoutProps & ThemeProps<typeof theme> = {
    theme: theme,
    height: 300
  }

  const test = layout(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      height: '300px'
    })
  })
})

describe('When passing responsive style objects', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: LayoutProps & ThemeProps<typeof theme> = {
    theme,
    display: { _: 'flex', sm: 'block', md: 'inline-block' }
  }

  const test = layout(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      display: 'flex',
      '@media screen and (min-width: 640px)': {
        display: 'block'
      },
      '@media screen and (min-width: 960px)': {
        display: 'inline-block'
      }
    })
  })
})

describe('When passing responsive style arrays', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: LayoutProps & ThemeProps<typeof theme> = {
    theme: theme,
    maxWidth: [360, 400, null, 720]
  }

  const test = layout(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      maxWidth: '360px',
      '@media screen and (min-width: 640px)': {
        maxWidth: '400px'
      },
      '@media screen and (min-width: 1280px)': {
        maxWidth: '720px'
      }
    })
  })
})

describe('When passing multiple responsive styles', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: LayoutProps & ThemeProps<typeof theme> = {
    theme: theme,
    maxWidth: [360, 400, null, 720],
    display: { _: 'flex', sm: 'block', lg: 'inline-block' }
  }

  const test = layout(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      maxWidth: '360px',
      display: 'flex',
      '@media screen and (min-width: 640px)': {
        maxWidth: '400px',
        display: 'block'
      },
      '@media screen and (min-width: 1280px)': {
        maxWidth: '720px',
        display: 'inline-block'
      }
    })
  })
})

describe('When tring to access the functions config property', () => {
  it('should return an object', () => {
    expect(typeof layout.config).toBe('object')
  })

  it('should return the layout config object', () => {
    expect(layout.config).toMatchObject(layoutConfig)
  })
})
