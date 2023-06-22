import * as CSS from 'csstype'

// Types
import type { ResponsiveStyle } from './responsive'

/*








*/

/**
 * CSSPropertiesWithMultiValues
 *
 * @deprecated in 1.2.2
 * @since 1.0.0
 */
export type CSSPropertiesWithMultiValues = {
  [K in keyof CSSProperties]: CSSProperties[K] | Array<Extract<CSSProperties[K], string>>
}

/**
 * CSSOthersObjectForCSSObject
 *
 * @deprecated in 1.2.2
 * @since 1.0.0
 */
export interface CSSOthersObjectForCSSObject {
  [propertiesName: string]: CSSInterpolation
}

/**
 * CSSProperties
 *
 * @since 1.0.0
 */
export type CSSProperties = CSS.Properties<string | number>

/**
 * CSSPseudos
 *
 * @since 1.0.0
 */
export type CSSPseudos = { [K in CSS.Pseudos]?: CSSObject }

/**
 * CSSInterpolation
 *
 * @since 1.0.0
 */
export type CSSInterpolation = undefined | number | string | CSSObject

/**
 * CSSObject
 *
 * CSS as POJO that is compatible with CSS-in-JS libaries.
 *
 * @since 1.0.0
 */
export interface CSSObject extends CSSProperties, CSSPseudos {
  [key: string]: CSSObject | string | number | undefined
}

/**
 * StyleProp
 *
 * @template T
 *
 * @since 1.0.0
 */
export type StyleProp<T> = T | ResponsiveStyle<T>
