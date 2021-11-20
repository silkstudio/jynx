import { systemTheme } from '../theme'
import { DeepKeys } from './utils'

/**
 * Basic theme object shape
 *
 * @since 1.0.0
 */
export type BaseExtensibleObject = {
  [key: string]: any
}

/**
 * ThemePropertyObject
 *
 * @since 1.0.0
 */
type ThemePropertyObject = {
  [key: string]: string | number
}

// API V2
//
// /**
//  * ThemePropertyArray
//  *
//  * @since 1.0.0
//  */
// type ThemePropertyArray = (string | number)[]
//
// /**
//  * ThemePropertyRecursiveObject
//  *
//  * @since 1.0.0
//  */
// type ThemePropertyRecursiveObject = {
//   [key: string]: string | number | ThemePropertyRecursiveObject
// }

/**
 * SystemTheme
 *
 * @since 1.0.0
 * @public
 */
export type SystemTheme = typeof systemTheme

/**
 * MappedTheme
 *
 * @template T extends {@link BaseExtensibleObject}
 *
 * @since 1.0.0
 */
type MappedTheme<T extends BaseExtensibleObject = BaseExtensibleObject> = {
  [K in keyof T]: T[K] | ThemePropertyObject
}

/**
 * DefaultTheme
 *
 * @since 1.0.0
 * @public
 */
export type DefaultTheme = MappedTheme<SystemTheme>

// =========================================== //
// INTERNAL THEME PROPERTIES
// =========================================== //

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
export type Breakpoint = keyof Breakpoints

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
export type Space = keyof Spaces

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
export type Font = Fonts extends undefined ? never : DeepKeys<Fonts>

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
export type Color = DeepKeys<Colors>

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
export type FontWeight = keyof FontWeights

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
export type LineHeight = keyof LineHeights

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
export type LetterSpacing = keyof LetterSpacings

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
export type Size = DeepKeys<Sizes>

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
export type Border = keyof Borders

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
export type BorderWidth = keyof BorderWidths

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
export type BorderStyle = keyof BorderStyles

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
export type Radius = keyof Radii

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
export type Shadow = keyof Shadows

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
export type ZIndicie = keyof ZIndicies

// =========================================== //
// RESPONSIVE STYLES
// =========================================== //

/**
 * ResponsiveArray
 *
 * @template T
 *
 * @since 1.0.0
 * @public
 */
export type ResponsiveArray<T> = [T, ...Array<T | null>]

/**
 * ResponsiveObject
 *
 * @template T
 *
 * @since 1.0.0
 * @public
 */
export type ResponsiveObject<T> = { _: T } & {
  [K in keyof Breakpoints]?: T
}

/**
 * ResponsiveStyle
 *
 * @template T
 *
 * @since 1.0.0
 * @public
 */
export type ResponsiveStyle<T> = ResponsiveArray<T> | ResponsiveObject<T>
