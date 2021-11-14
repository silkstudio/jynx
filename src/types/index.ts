import { baseTheme } from '../theme'

/**
 * Basic theme object shape
 *
 * @since 1.0.0
 */
export type BaseExtensibleObject = {
  [key: string]: any
}

/**
 * Basic theme object shape
 *
 * @since 1.0.0
 */

export type BaseTheme = typeof baseTheme

/**
 * DefaultTheme
 *
 * @since 1.0.0
 * @public
 */
export interface DefaultTheme extends BaseTheme {
  [key: string]: any
}
