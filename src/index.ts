import { parser } from './parsers/parser'
import { themeGet } from './utils/themeGet'
import { ThemeProvider } from './theme'

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

/*








*/

export { ThemeProvider, parser, themeGet }

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
  TypographyProps
}
