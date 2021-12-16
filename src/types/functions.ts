// Types
import type { CSSProperties } from './css'
import type { BaseExtensibleObject } from './common'
import type { DefaultTheme } from './theme'

/*








*/

/**
 * StyledFunction
 *
 * @template T
 *
 * @since 1.0.0
 * @public
 */
export type StyledFunction<T> = (props: T & { theme: DefaultTheme }) => BaseExtensibleObject

/**
 * StyledFunctionConfig
 *
 * @since 1.0.0
 * @public
 */
export interface StyledFunctionConfig {
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
export type TransformFunction<T> = (values: T, scale?: DefaultTheme[keyof DefaultTheme] | Record<string, any> | any[]) => T
