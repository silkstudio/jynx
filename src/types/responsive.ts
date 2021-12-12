// Types
import { DefaultTheme } from '.'
import type { Breakpoints } from './theme'

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
export type ResponsiveObject<K, T extends DefaultTheme = DefaultTheme> = { _: K } & {
  [Breakpoint in keyof T['breakpoints']]?: K
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
