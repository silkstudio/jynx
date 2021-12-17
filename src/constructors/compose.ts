// Types
import type { StyledFunction } from '../types/functions'

// Utils
import { createStyleFunction } from './createStyleFunction'

/**
 * compose
 *
 * @template T extends object
 *
 * @param {StyledFunction<any>[]} styledFunctions
 * @returns {StyledFunction<T>}
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

const compose = <T extends object>(...styledFunctions: StyledFunction<any>[]): StyledFunction<T> => {
  let config = {}

  styledFunctions.forEach(styledFunction => {
    if (!styledFunction || !styledFunction.config) {
      return
    }

    config = { ...config, ...styledFunction.config }
  })

  return createStyleFunction<T>(config)
}

export { compose }
