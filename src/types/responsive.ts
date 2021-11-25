// Types
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
