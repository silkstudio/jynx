import { systemTheme } from './theme'

// Function Imports
import { background, border, color, flexbox, grid, layout, position, shadow, space, typography } from './functions'

import type {
  BackgroundProps,
  BorderProps,
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps
} from './functions'

import type { BaseTheme } from './types'

// eslint-disable-next-line
interface DefaultEmptyTheme {}

/*








*/

export { systemTheme }

// Function Exports
export { background, border, color, flexbox, grid, layout, position, shadow, space, typography }

export type {
  BackgroundProps,
  BorderProps,
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
  BaseTheme as DefaultTheme,
  DefaultEmptyTheme
}
