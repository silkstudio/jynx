// Types
import * as CSS from 'csstype'
import type { ObjectOrArray } from './common'
import type { DefaultBreakpoints } from '../theme'
import type { DeepLeaves } from './utils'

/*








*/

/* -------- */
/*  THEMES  */
/* -------- */

/**
 * DefaultTheme
 *
 * @since 1.0.0
 * @public
 */
export interface BaseTheme {
  breakpoints: DefaultBreakpoints
  space?: ObjectOrArray<CSS.Property.Margin<string | number>>
  fontSizes?: ObjectOrArray<CSS.Property.FontSize<number>>
  colors?: ObjectOrArray<CSS.Property.Color>
  fonts?: ObjectOrArray<CSS.Property.FontFamily>
  fontWeights?: ObjectOrArray<CSS.Property.FontWeight>
  lineHeights?: ObjectOrArray<CSS.Property.LineHeight<number>>
  letterSpacings?: ObjectOrArray<CSS.Property.LetterSpacing<number>>
  sizes?: ObjectOrArray<CSS.Property.Height | CSS.Property.Width>
  borders?: ObjectOrArray<CSS.Property.Border>
  borderStyles?: ObjectOrArray<CSS.Property.Border>
  borderWidths?: ObjectOrArray<CSS.Property.BorderWidth<number>>
  radii?: ObjectOrArray<CSS.Property.BorderRadius<number>>
  shadows?: ObjectOrArray<CSS.Property.BoxShadow>
  transitions?: ObjectOrArray<CSS.Property.Transition>
  zIndices?: ObjectOrArray<CSS.Property.ZIndex>
}

/**
 * CustomTheme
 *
 * @since 1.0.0
 */
// eslint-disable-next-line
export interface CustomTheme {}

/**
 * BaseIfEmpty
 *
 * @template T extends object
 *
 * @since 1.0.0
 */
export type BaseIfEmpty<T extends object> = keyof T extends never ? BaseTheme : T

/**
 * CustomTheme
 *
 * @since 1.0.0
 */
export type DefaultTheme = BaseIfEmpty<CustomTheme>

/* ------------------ */
/*  THEME ATTRIBUTES  */
/* ------------------ */
/**
 * ThemeProps
 * @template T
 *
 * @since 1.0.0
 * @public
 */
export type ThemeProps<T> = {
  theme: T
}

/**
 * ThemeValue
 *
 * @template K extends keyof T — Theme scale
 * @template T Theme
 *
 * @since 1.0.0
 */
export type ThemeValue<T extends keyof DefaultTheme> = DefaultTheme[T] extends string | number
  ? DefaultTheme[T]
  : DeepLeaves<DefaultTheme[T]>
