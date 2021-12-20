import * as CSS from 'csstype'

// Types
import type { ResponsiveStyle } from './responsive'

/*








*/

/**
 * CSSProperties
 *
 * @since 1.0.0
 */
export interface CSSProperties extends CSS.StandardProperties<number | string>, CSS.SvgProperties<number | string> {}

/**
 *
 */
// eslint-disable-next-line
export type BaseCSSValue = string | number | (string & {}) | (number & {}) | undefined

/**
 * CSSPseudos
 *
 * @since 1.0.0
 */
export type CSSPseudos = { [K in CSS.Pseudos]?: CSSObject }

/**
 * CSSPropertiesWithMultiValues
 *
 * @since 1.0.0
 */
export type CSSPropertiesWithMultiValues = {
  [K in keyof CSSProperties]: CSSProperties[K]
}

/**
 * CSSInterpolation
 *
 * @since 1.0.0
 */
export type CSSInterpolation = undefined | number | string | CSSObject

/**
 * CSSOthersObjectForCSSObject
 *
 * @since 1.0.0
 */
export interface CSSOthersObjectForCSSObject {
  [propertiesName: string]: CSSInterpolation
}

/**
 * CSSObject
 *
 * CSS as POJO that is compatible with CSS-in-JS libaries.
 * Copied directly from [emotion](https://github.com/emotion-js/emotion/blob/ca3ad1c1dcabf78a95b55cc2dc94cad1998a3196/packages/serialize/types/index.d.ts#L45) types
 *
 * @since 1.0.0
 */

export interface CSSObject extends CSSPropertiesWithMultiValues, CSSPseudos, CSSOthersObjectForCSSObject {}

/**
 * StyleProp
 *
 * @template T
 *
 * @since 1.0.0
 */
export type StyleProp<T> = T | ResponsiveStyle<T>
