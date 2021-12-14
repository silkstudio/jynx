// Types
import { DefaultTheme } from './theme'

/*








*/

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
export type ResponsiveObject<K> = { _: K } & {
  [key in keyof DefaultTheme['breakpoints']]?: K
}

/**
 * ResponsiveStyle
 *
 * @template T
 *
 * @since 1.0.0
 * @public
 */
export type ResponsiveStyle<K> = ResponsiveArray<K> | ResponsiveObject<K>
