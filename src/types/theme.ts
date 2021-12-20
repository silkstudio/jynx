// Types
import * as CSS from 'csstype'
import type { ObjectOrArray } from './common'
import type { DefaultBreakpoints } from '../utils/defaultBreakpoints'
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
  breakpoints?: ObjectOrArray<number | string>
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
 * @template K extends keyof T — Theme scale
 * @template T Theme
 *
 * @since 1.0.0
 */
export type ThemeValue<T extends keyof DefaultTheme> = DefaultTheme[T] extends string | number
  ? DefaultTheme[T]
  : DeepLeaves<DefaultTheme[T]>

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
export type Breakpoint = ThemeValue<'breakpoints'>

/**
 * Spaces
 *
 * @since 1.0.0
 * @nestable false
 */
export type Spaces = DefaultTheme['space']

/**
 * Space
 *
 * @since 1.0.0
 */
export type Space = ThemeValue<'space'>

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
export type Font = ThemeValue<'fonts'>

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
export type Color = ThemeValue<'colors'>

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
export type FontWeight = ThemeValue<'fontWeights'>

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
export type LineHeight = ThemeValue<'lineHeights'>

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
export type LetterSpacing = ThemeValue<'letterSpacings'>

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
export type Size = ThemeValue<'sizes'>

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
export type Border = ThemeValue<'borders'>

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
export type BorderWidth = ThemeValue<'borderWidths'>

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
export type BorderStyle = ThemeValue<'borderStyles'>

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
export type Radius = ThemeValue<'radii'>

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
export type Shadow = ThemeValue<'shadows'>

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
export type ZIndicie = ThemeValue<'zIndices'>
