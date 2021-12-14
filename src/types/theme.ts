// Types
import * as CSS from 'csstype'
import type { ObjectOrArray, StringOrNumber } from './common'
import type { DefaultBreakpoints } from '../utils/defaultBreakpoints'
import type { ElementOf } from 'ts-essentials'

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
 * BaseThemeWithBreakpoints
 *
 * @since 1.0.0
 */
export interface BaseThemeWithBreakpoints extends Omit<BaseTheme, 'breakpoints'> {
  breakpoints: DefaultBreakpoints
}

/**
 * RequiredTheme
 *
 * @since 1.0.0
 */
export type RequiredTheme = Required<BaseTheme>

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
export type BaseIfEmpty<T extends object> = keyof T extends never ? BaseThemeWithBreakpoints : T

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
 * @template T Theme
 * @template K extends keyof T — Theme scale
 *
 * @since 1.0.0
 */
export type ThemeValue<K extends keyof T, T extends BaseTheme = BaseTheme, P = T[K]> = P extends string | number
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
 * @template T extends {@link BaseTheme} [=DefaultTheme]
 * @template S [=T[K]]
 *
 * @since 1.0.0
 */
export type ThemeScale<K extends keyof T, T extends BaseTheme = BaseTheme, S = T[K]> = S extends string | number
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
 * @template T extends {@link BaseTheme} [=DefaultTheme]
 *
 * @since 1.0.0
 */
export type StrictThemeScale<K extends keyof T, T extends BaseTheme = BaseTheme> = T[K]

/* ------------------ */
/*  THEME PROPERTIES  */
/* ------------------ */
/**
 * Breakpoints
 *
 * @since 1.0.0
 * @nestable false
 */
export type Breakpoints = BaseTheme['breakpoints']

/**
 * Breakpoint
 *
 * @since 1.0.0
 */
export type Breakpoint = ThemeValue<'breakpoints', BaseTheme>

/**
 * Spaces
 *
 * @since 1.0.0
 * @nestable false
 */
export type Spaces = BaseTheme['spaces']

/**
 * Space
 *
 * @since 1.0.0
 */
export type Space = ThemeValue<'spaces', BaseTheme>

/**
 * Fonts
 *
 * @since 1.0.0
 * @nestable true
 */
export type Fonts = BaseTheme['fonts']

/**
 * Font
 *
 * @since 1.0.0
 */
export type Font = ThemeValue<'fonts', BaseTheme>

/**
 * Colors
 *
 * @since 1.0.0
 * @nestable true
 */
export type Colors = BaseTheme['colors']

/**
 * Color
 *
 * @since 1.0.0
 */
export type Color = ThemeValue<'colors', BaseTheme>

/**
 * FontWeights
 *
 * @since 1.0.0
 * @nestable false
 */
export type FontWeights = BaseTheme['fontWeights']

/**
 * FontWeight
 *
 * @since 1.0.0
 */
export type FontWeight = ThemeValue<'fontWeights', BaseTheme>

/**
 * LineHeights
 *
 * @since 1.0.0
 * @nestable false
 */
export type LineHeights = BaseTheme['lineHeights']

/**
 * LineHeight
 *
 * @since 1.0.0
 */
export type LineHeight = ThemeValue<'lineHeights', BaseTheme>

/**
 * LetterSpacings
 *
 * @since 1.0.0
 * @nestable false
 */
export type LetterSpacings = BaseTheme['letterSpacings']

/**
 * LetterSpacing
 *
 * @since 1.0.0
 */
export type LetterSpacing = ThemeValue<'letterSpacings', BaseTheme>

/**
 * Sizes
 *
 * @since 1.0.0
 * @nestable true
 */
export type Sizes = BaseTheme['sizes']

/**
 * Size
 *
 * @since 1.0.0
 */
export type Size = ThemeValue<'sizes', BaseTheme>

/**
 * Borders
 *
 * @since 1.0.0
 * @nestable false
 */
export type Borders = BaseTheme['borders']

/**
 * Border
 *
 * @since 1.0.0
 */
export type Border = ThemeValue<'borders', BaseTheme>

/**
 * BorderWidths
 *
 * @since 1.0.0
 * @nestable false
 */
export type BorderWidths = BaseTheme['borderWidths']

/**
 * BorderWidth
 *
 * @since 1.0.0
 */
export type BorderWidth = ThemeValue<'borderWidths', BaseTheme>

/**
 * BorderStyles
 *
 * @since 1.0.0
 * @nestable false
 */
export type BorderStyles = BaseTheme['borderStyles']

/**
 * BorderStyle
 *
 * @since 1.0.0
 */
export type BorderStyle = ThemeValue<'borderStyles', BaseTheme>

/**
 * Radii
 *
 * @since 1.0.0
 * @nestable false
 */
export type Radii = BaseTheme['radii']

/**
 * Radius
 *
 * @since 1.0.0
 */
export type Radius = ThemeValue<'radii', BaseTheme>

/**
 * Shadows
 *
 * @since 1.0.0
 * @nestable false
 */
export type Shadows = BaseTheme['shadows']

/**
 * Shadow
 *
 * @since 1.0.0
 */
export type Shadow = ThemeValue<'shadows', BaseTheme>

/**
 * ZIndicies
 *
 * @since 1.0.0
 * @nestable false
 */
export type ZIndicies = BaseTheme['zIndices']

/**
 * ZIndicie
 *
 * @since 1.0.0
 */
export type ZIndicie = ThemeValue<'zIndices', BaseTheme>
