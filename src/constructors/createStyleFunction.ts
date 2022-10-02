// Types
import type { StyleFunction, StyleFunctionConfig } from '../types/functions'

// Utils
import deepmerge from 'deepmerge'
import { fallbackTheme } from '../theme'
import { createStylesObject } from './createStylesObject'

/**
 * createStyleFunction
 *
 * @template K extends object
 *
 * @param {StyleFunctionConfig} config
 * @returns {StyleFunction<K>}
 *
 * @since 1.0.0
 */

/*








*/

const createStyleFunction = <K extends object>(config: StyleFunctionConfig): StyleFunction<K> => {
  const builder: StyleFunction<K> = ({ theme = {}, ...styles }) => {
    const _theme = deepmerge(fallbackTheme, theme)
    return createStylesObject<typeof styles>(styles, _theme, config)
  }

  builder.config = config
  return builder
}

export { createStyleFunction }
