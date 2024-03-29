// StyleFunctions
import {
  animation,
  background,
  border,
  color,
  extendedFlexbox,
  extendedGrid,
  extendedGridChild,
  flexbox,
  grid,
  gridChild,
  layout,
  position,
  shadow,
  space,
  transition,
  typography
} from './functions'

import type {
  AnimationProps,
  BackgroundBaseProps,
  BackgroundShorthandProps,
  BackgroundProps,
  BorderProps,
  ColorBaseProps,
  ColorShorthandProps,
  ColorProps,
  ExtendedFlexboxProps,
  ExtendedGridProps,
  ExtendedGridChildProps,
  FlexboxProps,
  GridProps,
  GridChildProps,
  LayoutProps,
  MarginProps,
  MarginShorthandProps,
  MarginBaseProps,
  PaddingBaseProps,
  PaddingShorthandProps,
  PaddingProps,
  PositionBaseProps,
  PositionShorthandProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TransitionProps,
  TypographyProps
} from './functions'

// Types
import type { CSSObject, CSSProperties, CSSInterpolation, StyleProp } from './types/css'
import type { StyleFunction, StyleFunctionConfig, TransformFunction } from './types/functions'
import type { BaseTheme, CustomTheme, DefaultTheme, ThemeProps, ThemeValue } from './types/theme'

// Utils
import { createStyleFunction, compose } from './constructors'
import { shouldForwardProp } from './helpers/shouldForwardProp'

/*








*/

// StyleFunctions
export {
  animation,
  background,
  border,
  color,
  extendedFlexbox,
  extendedGrid,
  extendedGridChild,
  flexbox,
  grid,
  gridChild,
  layout,
  position,
  shadow,
  space,
  transition,
  typography
}

export type {
  AnimationProps,
  BackgroundBaseProps,
  BackgroundShorthandProps,
  BackgroundProps,
  BorderProps,
  ColorBaseProps,
  ColorShorthandProps,
  ColorProps,
  ExtendedFlexboxProps,
  ExtendedGridProps,
  ExtendedGridChildProps,
  FlexboxProps,
  GridProps,
  GridChildProps,
  LayoutProps,
  MarginProps,
  MarginShorthandProps,
  MarginBaseProps,
  PaddingBaseProps,
  PaddingShorthandProps,
  PaddingProps,
  PositionBaseProps,
  PositionShorthandProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TransitionProps,
  TypographyProps
}

// Types
export type {
  CSSObject,
  CSSProperties,
  CSSInterpolation,
  StyleProp,
  StyleFunction,
  StyleFunctionConfig,
  TransformFunction,
  BaseTheme,
  CustomTheme,
  DefaultTheme,
  ThemeProps,
  ThemeValue
}

// Utils
export { createStyleFunction, compose, shouldForwardProp }
