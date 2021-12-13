// Types
import type { DefaultBreakpoints } from '../utils/defaultBreakpoints'
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
export type ResponsiveObject<K, T extends DefaultTheme['breakpoints'] = DefaultBreakpoints> = { _: K } & {
  [key in T extends any[] | readonly [...any]
    ? never
    : T extends Record<string, string | number>
    ? keyof T
    : keyof DefaultBreakpoints]?: K
} & {
  [key: string]: K
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
