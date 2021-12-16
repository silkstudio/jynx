// Types
import type { StyledFunction, StyledFunctionConfig } from '../types/functions'

// Utils
import { createStylesObject } from './createStylesObject'

/**
 * createStyleFunction
 *
 * @template K extends object
 *
 * @param {StyledFunctionConfig} config
 * @returns {StyledFunction<K>}
 *
 * @since 1.0.0
 */

/*








*/

const createStyleFunction = <K extends object>(config: StyledFunctionConfig): StyledFunction<K> => {
  const builder: StyledFunction<K> = ({ theme, ...styles }) => createStylesObject<typeof styles>(styles, theme, config)
  builder.config = config
  return builder
}

export { createStyleFunction }
