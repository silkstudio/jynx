// Types
import type { Properties as CSS } from 'csstype'
import type { BaseExtensibleObject } from './common'
import type { DefaultTheme } from './theme'

/*








*/

/**
 * StyledFunction
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
    property: keyof CSS
    scale?: keyof DefaultTheme
  }
}
