// Types
import type { CSSObject, CSSProperties } from './css'
import type { DefaultTheme } from './theme'

/*








*/

/**
 * StyleFunction
 *
 * @template T
 *
 * @since 1.0.0
 * @public
 */
export type StyleFunction<T> = {
  (props: T & { theme: DefaultTheme }): CSSObject
  config: StyleFunctionConfig
}

/**
 * StyleFunctionConfig
 *
 * @since 1.0.0
 * @public
 */
export interface StyleFunctionConfig {
  [key: string]: {
    property: keyof CSSProperties
    scale?: keyof DefaultTheme
    transformer?: TransformFunction<any>
  }
}

/**
 * TransformFunction
 *
 * @template T
 *
 * @since 1.0.0
 * @public
 */
export type TransformFunction<T> = (value: T, scale?: DefaultTheme[keyof DefaultTheme] | Record<string, any> | any[]) => T
