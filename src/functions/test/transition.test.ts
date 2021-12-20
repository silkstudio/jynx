// Types
import type { ThemeProps } from '../../types/theme'

// Utils
import { transition, TransitionProps, transitionConfig } from '../transition'
import { defaultBreakpoints } from '../../utils'

/*








*/

describe('When passing single style declarations', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: TransitionProps & ThemeProps<typeof theme> = {
    theme: theme,
    transition: 'all 0.3s ease-out'
  }

  const test = transition(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      transition: 'all 0.3s ease-out'
    })
  })
})

describe('When passing responsive style objects', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: TransitionProps & ThemeProps<typeof theme> = {
    theme,
    transitionTimingFunction: { _: 'ease-in', sm: 'ease-in-out', md: 'ease-out' }
  }

  const test = transition(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      transitionTimingFunction: 'ease-in',
      '@media screen and (min-width: 640px)': {
        transitionTimingFunction: 'ease-in-out'
      },
      '@media screen and (min-width: 960px)': {
        transitionTimingFunction: 'ease-out'
      }
    })
  })
})

describe('When passing responsive style arrays', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: TransitionProps & ThemeProps<typeof theme> = {
    theme: theme,
    transitionTimingFunction: ['ease-out', 'ease-in', null, 'ease-in-out']
  }

  const test = transition(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      transitionTimingFunction: 'ease-out',
      '@media screen and (min-width: 640px)': {
        transitionTimingFunction: 'ease-in'
      },
      '@media screen and (min-width: 1280px)': {
        transitionTimingFunction: 'ease-in-out'
      }
    })
  })
})

describe('When passing multiple responsive styles', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: TransitionProps & ThemeProps<typeof theme> = {
    theme: theme,
    transitionTimingFunction: ['ease-in-out', 'ease-out', null, 'linear'],
    transitionDuration: { _: '0.3s', sm: '0.5s', lg: '0.7s' }
  }

  const test = transition(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      transitionTimingFunction: 'ease-in-out',
      transitionDuration: '0.3s',
      '@media screen and (min-width: 640px)': {
        transitionTimingFunction: 'ease-out',
        transitionDuration: '0.5s'
      },
      '@media screen and (min-width: 1280px)': {
        transitionTimingFunction: 'linear',
        transitionDuration: '0.7s'
      }
    })
  })
})

describe('When tring to access the functions config property', () => {
  it('should return an object', () => {
    expect(typeof transition.config).toBe('object')
  })

  it('should return the transition config object', () => {
    expect(transition.config).toMatchObject(transitionConfig)
  })
})
