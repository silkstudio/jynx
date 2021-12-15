// StyleFunctions
import {
  animation,
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  transition,
  typography
} from './functions'

import type {
  AnimationProps,
  BackgroundProps,
  BorderProps,
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TransitionProps,
  TypographyProps
} from './functions'

// Themes
import { systemTheme } from './theme'
import type { BaseTheme, CustomTheme, DefaultTheme } from './types/theme'

// Utils
import { createStyleFunction } from './constructors'
import type { StyledFunction, StyledFunctionConfig } from './types/functions'

/*








*/

// StyleFunctions
export { animation, background, border, color, flexbox, grid, layout, position, shadow, space, transition, typography }

export type {
  AnimationProps,
  BackgroundProps,
  BorderProps,
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TransitionProps,
  TypographyProps
}

// Themes
export { systemTheme }

export type { BaseTheme, CustomTheme, DefaultTheme }

// Utils
export { createStyleFunction }
export type { StyledFunction, StyledFunctionConfig }
