// Types
import type { StyleFunction } from '../types/functions'

// Utils
import { createStyleFunction } from './createStyleFunction'

/**
 * compose
 *
 * @template T extends object
 *
 * @param {StyleFunction<any>[]} styleFunctions
 * @returns {StyleFunction<T>}
 *
 * @example
 * // Define all props that can be passed to the component
 * type Props = FlexboxProps & LayoutProps & ColorProps
 *
 * export const container = styled.div<Props>`
 *   ${compose<Props>(flexbox, layout, color)}
 * `
 *
 * @since 1.0.0
 *
 *
 */

/*



 





*/

const compose = <T extends Record<string, any>>(...styleFunctions: StyleFunction<{ [K in keyof T]: T[K] }>[]): StyleFunction<T> => {
  let config = {}

  styleFunctions.forEach(styleFunction => {
    if (!styleFunction || !styleFunction.config) {
      return
    }

    config = { ...config, ...styleFunction.config }
  })

  return createStyleFunction<T>(config)
}

export { compose }
