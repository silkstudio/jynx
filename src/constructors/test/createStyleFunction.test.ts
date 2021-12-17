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

describe('Name of the group', () => {
  // Set-up
  type Props = ColorProps & ThemeProps<typeof theme>

  const theme = {
    breakpoints: defaultBreakpoints,
    spaces: [4, 8, 16, 32, 48],
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

  it('should parse single values', () => {
    const styles: Props = {
      theme,
      color: 'tomato',
      backgroundColor: 'blue'
    }
    expect(color(styles)).toEqual({ color: 'tomato', backgroundColor: 'blue' })
  })

  it('should parse responsive values', () => {
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

  it('should merge multiple responsive values', () => {
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

  it('should resolve theme values', () => {
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

  it('should resolve 0 index values', () => {
    const styles: SpaceProps & ThemeProps<typeof theme> = {
      theme,
      margin: 0
    }

    expect(space(styles)).toEqual({
      margin: '4px'
    })
  })

  it('should return parser configs that can be composed manually', () => {})
})
