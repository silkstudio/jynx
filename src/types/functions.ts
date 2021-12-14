// Types
import type { CSSProperties } from './css'
import type { BaseExtensibleObject } from './common'
import type { BaseTheme } from './theme'

/*








*/

/**
 * StyledFunction
 *
 * @since 1.0.0
 * @public
 */
export type StyledFunction<T> = (props: T & { theme: BaseTheme }) => BaseExtensibleObject

/**
 * StyledFunctionConfig
 *
 * @since 1.0.0
 * @public
 */
export interface StyledFunctionConfig {
  [key: string]: {
    property: keyof CSSProperties
    scale?: keyof BaseTheme
  }
}
