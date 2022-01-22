// Types
import type { DefaultTheme } from './theme'

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
export type ResponsiveObject<T> = { _: T } & Omit<
  {
    [key in keyof DefaultTheme['breakpoints']]?: T
  },
  keyof [] | keyof ''
>

/**
 * ResponsiveStyle
 *
 * @template T
 *
 * @since 1.0.0
 * @public
 */
export type ResponsiveStyle<K> = ResponsiveArray<K> | ResponsiveObject<K>
