// Types
import type { ColorProps } from '../../functions/color'
import type { SpaceProps } from '../../functions/space'
import type { ThemeProps } from '../../types/theme'

// Utils
import { createStyleFunction } from '../createStyleFunction'
import { defaultBreakpoints } from '../../utils'
import { colorConfig } from '../../functions/color'
import { spaceConfig } from '../../functions/space'

/*








*/

describe('createStyleFunction', () => {
  // Set-up
  type Props = ColorProps & ThemeProps<typeof theme>
  const theme = {
    breakpoints: defaultBreakpoints,
    space: [4, 8, 16, 32, 48],
    colors: {
      primary: 'rebeccapurple',
      secondary: 'maroon'
    }
  }

  const color = createStyleFunction<ColorProps>(colorConfig)
  const space = createStyleFunction<SpaceProps>(spaceConfig)

  it('should return a function', () => {
    expect(typeof color).toBe('function')
  })

  it('should return a function that can parse single style values', () => {
    const styles: Props = {
      theme,
      color: 'tomato',
      backgroundColor: 'blue'
    }
    expect(color(styles)).toEqual({ color: 'tomato', backgroundColor: 'blue' })
  })

  it('should return a function that can parse responsive style values', () => {
    const styles: Props = {
      theme,
      color: ['tomato', 'aquamarine', null, 'orange']
    }
    expect(color(styles)).toEqual({
      color: 'tomato',
      '@media screen and (min-width: 640px)': { color: 'aquamarine' },
      '@media screen and (min-width: 1280px)': { color: 'orange' }
    })
  })

  it('should return a function that merges multiple responsive style declarations', () => {
    const styles: Props = {
      theme,
      color: ['tomato', 'aquamarine', null, 'orange'],
      backgroundColor: { _: 'red', sm: 'blue' }
    }
    expect(color(styles)).toEqual({
      color: 'tomato',
      backgroundColor: 'red',
      '@media screen and (min-width: 640px)': { backgroundColor: 'blue', color: 'aquamarine' },
      '@media screen and (min-width: 1280px)': { color: 'orange' }
    })
  })

  it('should return a function that resolves theme values of they exist', () => {
    const colorStyles: Props = {
      theme,
      color: ['primary', 'aquamarine', null, 'secondary']
    }

    expect(color(colorStyles)).toEqual({
      color: 'rebeccapurple',
      '@media screen and (min-width: 640px)': { color: 'aquamarine' },
      '@media screen and (min-width: 1280px)': { color: 'maroon' }
    })

    const spaceStyles: SpaceProps & ThemeProps<typeof theme> = {
      theme,
      m: 1
    }

    expect(space(spaceStyles)).toEqual({
      margin: '8px'
    })
  })

  it('should return a return a function that can resolve 0 index values within the theme', () => {
    const styles: SpaceProps & ThemeProps<typeof theme> = {
      theme,
      margin: 0
    }

    expect(space(styles)).toEqual({
      margin: '4px'
    })
  })

  it('should return a function with accessible configs that can be used to manually compose combined functions', () => {
    expect(color.config).toMatchObject(colorConfig)
    expect(space.config).toMatchObject(spaceConfig)
  })
})
