// Types
import type { CSSProperties } from './css'
import type { BaseExtensibleObject } from './common'
import type { DefaultTheme } from './theme'
import { ResponsiveStyle } from './responsive'

/*








*/

/**
 * StyledFunction
 *
 * @since 1.0.0
 * @public
 */
export type StyledFunction<T> = (props: T & { theme: DefaultTheme }) => BaseExtensibleObject

export type TransformFunction<T> = (values: T) => T

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
    transform?: TransformFunction<any>
  }
}
