// Types
import type { CSSProperties } from '../types/css'

const spanOperator = '|'

/**
 * gridSpanTransformer
 *
 * @param {CSSProperties['gridColumn' | 'gridRow' | 'gridArea']} value
 * @returns {string | (number & {}) | undefined}
 */

/*








*/

// eslint-disable-next-line @typescript-eslint/ban-types
const gridSpanTransformer = (value: CSSProperties['gridColumn' | 'gridRow' | 'gridArea']): string | (number & {}) | undefined => {
  const flattened = Array.isArray(value) ? value.join(' / ') : value
  const parsed = typeof flattened === 'string' ? flattened.replaceAll(spanOperator, 'span ') : flattened

  return parsed
}

export { gridSpanTransformer }
