// Types
import type { ThemeProps } from '../../types/theme'

// Utils
import { animation, AnimationProps, animationConfig } from '../animation'
import { defaultBreakpoints } from '../../theme'

/*








*/

describe('When passing single style declarations', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: AnimationProps & ThemeProps<typeof theme> = {
    theme: theme,
    animation: 'example 5s linear 2s infinite alternate'
  }

  const test = animation(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      animation: 'example 5s linear 2s infinite alternate'
    })
  })
})

describe('When passing responsive style objects', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: AnimationProps & ThemeProps<typeof theme> = {
    theme,
    animationTimingFunction: { _: 'ease', sm: 'linear', lg: 'ease-out' }
  }

  const test = animation(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      animationTimingFunction: 'ease',
      '@media screen and (min-width: 640px)': {
        animationTimingFunction: 'linear'
      },
      '@media screen and (min-width: 1280px)': {
        animationTimingFunction: 'ease-out'
      }
    })
  })
})

describe('When passing responsive style arrays', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: AnimationProps & ThemeProps<typeof theme> = {
    theme: theme,
    animationTimingFunction: ['ease', 'linear', null, 'ease-out']
  }

  const test = animation(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      animationTimingFunction: 'ease',
      '@media screen and (min-width: 640px)': {
        animationTimingFunction: 'linear'
      },
      '@media screen and (min-width: 1280px)': {
        animationTimingFunction: 'ease-out'
      }
    })
  })
})

describe('When passing multiple responsive styles', () => {
  const theme = {
    breakpoints: defaultBreakpoints
  }

  const styles: AnimationProps & ThemeProps<typeof theme> = {
    theme: theme,
    animationTimingFunction: ['ease', 'linear', null, 'ease-out'],
    animationDirection: { _: 'alternate', sm: 'normal', lg: 'reverse' }
  }

  const test = animation(styles)

  it('should return an object', () => {
    expect(typeof test).toBe('object')
  })

  it('should be able to parse the styles and return a CSSObject', () => {
    expect(test).toEqual({
      animationTimingFunction: 'ease',
      animationDirection: 'alternate',
      '@media screen and (min-width: 640px)': {
        animationTimingFunction: 'linear',
        animationDirection: 'normal'
      },
      '@media screen and (min-width: 1280px)': {
        animationTimingFunction: 'ease-out',
        animationDirection: 'reverse'
      }
    })
  })
})

describe('When tring to access the functions config property', () => {
  it('should return an object', () => {
    expect(typeof animation.config).toBe('object')
  })

  it('should return the animation config object', () => {
    expect(animation.config).toMatchObject(animationConfig)
  })
})
