// Utils
import { createTransformer } from '../constructors'

const spanOperator = '|'

/**
 * gridSpanTransformer
 *
 * @param {CSSProperties['gridColumn' | 'gridRow' | 'gridArea']} value
 * @returns {string | (number & {}) | undefined}
 */

/*








*/

const gridSpanTransformer = createTransformer<'gridColumn' | 'gridRow' | 'gridArea'>(value => {
  const flattened = Array.isArray(value) ? value.join(' / ') : value
  const parsed = typeof flattened === 'string' ? flattened.replaceAll(spanOperator, 'span ') : flattened

  return parsed
})

export { gridSpanTransformer }
