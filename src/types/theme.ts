import { systemTheme } from '../theme'

// Types
import * as CSS from 'csstype'
import type { ObjectOrArray, StringOrNumber } from './utils'
import type { ElementOf } from 'ts-essentials'

/*








*/

// /**
//  * ThemePropertyObject
//  *
//  * @since 1.0.0
//  */
// type ThemePropertyObject = {
//   [key: string]: string | number
// }

/* -------- */
/*  THEMES  */
/* -------- */

/**
 * DefaultTheme
 *
 * @since 1.0.0
 * @public
 */
export interface DefaultTheme {
  breakpoints?: ObjectOrArray<number | string>
  spaces?: ObjectOrArray<CSS.Property.Margin<string | number>>
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
  zIndices?: ObjectOrArray<CSS.Property.ZIndex>
}

/**
 *
 */
export type RequiredTheme = Required<DefaultTheme>

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
 * @template T Theme
 * @template K extends keyof T — Theme scale
 *
 * @since 1.0.0
 */
export type ThemeValue<K extends keyof T, T extends DefaultTheme = RequiredTheme, P = T[K]> = P extends string | number
  ? P
  : P extends any[] | readonly [...any]
  ? ElementOf<P>
  : P extends Record<string, infer E>
  ? E
  : never

/**
 * ThemeScale
 *
 * @template K extends keyof T
 * @template T extends {@link DefaultTheme} [=DefaultTheme]
 * @template S [=T[K]]
 *
 * @since 1.0.0
 */
export type ThemeScale<K extends keyof T, T extends DefaultTheme = DefaultTheme, S = T[K]> = S extends string | number
  ? StringOrNumber<S>
  : S extends any[] | readonly [...infer P]
  ? StringOrNumber<P[number]>
  : S extends Record<string, infer E>
  ? StringOrNumber<E>
  : never

/**
 * StrictThemeScale
 *
 * @template K extends keyof T
 * @template T extends {@link DefaultTheme} [=DefaultTheme]
 *
 * @since 1.0.0
 */
export type StrictThemeScale<K extends keyof T, T extends DefaultTheme = DefaultTheme> = T[K]

/* ------------------ */
/*  THEME PROPERTIES  */
/* ------------------ */
/**
 * Breakpoints
 *
 * @since 1.0.0
 * @nestable false
 */
export type Breakpoints = DefaultTheme['breakpoints']

/**
 * Breakpoint
 *
 * @since 1.0.0
 */
export type Breakpoint = ThemeValue<'breakpoints', DefaultTheme>

/**
 * Spaces
 *
 * @since 1.0.0
 * @nestable false
 */
export type Spaces = DefaultTheme['spaces']

/**
 * Space
 *
 * @since 1.0.0
 */
export type Space = ThemeValue<'spaces', DefaultTheme>

/**
 * Fonts
 *
 * @since 1.0.0
 * @nestable true
 */
export type Fonts = DefaultTheme['fonts']

/**
 * Font
 *
 * @since 1.0.0
 */
export type Font = ThemeValue<'fonts', DefaultTheme>

/**
 * Colors
 *
 * @since 1.0.0
 * @nestable true
 */
export type Colors = DefaultTheme['colors']

/**
 * Color
 *
 * @since 1.0.0
 */
export type Color = ThemeValue<'colors', DefaultTheme>

/**
 * FontWeights
 *
 * @since 1.0.0
 * @nestable false
 */
export type FontWeights = DefaultTheme['fontWeights']

/**
 * FontWeight
 *
 * @since 1.0.0
 */
export type FontWeight = ThemeValue<'fontWeights', DefaultTheme>

/**
 * LineHeights
 *
 * @since 1.0.0
 * @nestable false
 */
export type LineHeights = DefaultTheme['lineHeights']

/**
 * LineHeight
 *
 * @since 1.0.0
 */
export type LineHeight = ThemeValue<'lineHeights', DefaultTheme>

/**
 * LetterSpacings
 *
 * @since 1.0.0
 * @nestable false
 */
export type LetterSpacings = DefaultTheme['letterSpacings']

/**
 * LetterSpacing
 *
 * @since 1.0.0
 */
export type LetterSpacing = ThemeValue<'letterSpacings', DefaultTheme>

/**
 * Sizes
 *
 * @since 1.0.0
 * @nestable true
 */
export type Sizes = DefaultTheme['sizes']

/**
 * Size
 *
 * @since 1.0.0
 */
export type Size = ThemeValue<'sizes', DefaultTheme>

/**
 * Borders
 *
 * @since 1.0.0
 * @nestable false
 */
export type Borders = DefaultTheme['borders']

/**
 * Border
 *
 * @since 1.0.0
 */
export type Border = ThemeValue<'borders', DefaultTheme>

/**
 * BorderWidths
 *
 * @since 1.0.0
 * @nestable false
 */
export type BorderWidths = DefaultTheme['borderWidths']

/**
 * BorderWidth
 *
 * @since 1.0.0
 */
export type BorderWidth = ThemeValue<'borderWidths', DefaultTheme>

/**
 * BorderStyles
 *
 * @since 1.0.0
 * @nestable false
 */
export type BorderStyles = DefaultTheme['borderStyles']

/**
 * BorderStyle
 *
 * @since 1.0.0
 */
export type BorderStyle = ThemeValue<'borderStyles', DefaultTheme>

/**
 * Radii
 *
 * @since 1.0.0
 * @nestable false
 */
export type Radii = DefaultTheme['radii']

/**
 * Radius
 *
 * @since 1.0.0
 */
export type Radius = ThemeValue<'radii', DefaultTheme>

/**
 * Shadows
 *
 * @since 1.0.0
 * @nestable false
 */
export type Shadows = DefaultTheme['shadows']

/**
 * Shadow
 *
 * @since 1.0.0
 */
export type Shadow = ThemeValue<'shadows', DefaultTheme>

/**
 * ZIndicies
 *
 * @since 1.0.0
 * @nestable false
 */
export type ZIndicies = DefaultTheme['zIndices']

/**
 * ZIndicie
 *
 * @since 1.0.0
 */
export type ZIndicie = ThemeValue<'zIndices', DefaultTheme>
